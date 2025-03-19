"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("@opentelemetry/api");
const exporter_trace_otlp_proto_1 = require("@opentelemetry/exporter-trace-otlp-proto");
const instrumentation_fastify_1 = require("@opentelemetry/instrumentation-fastify");
const instrumentation_http_1 = require("@opentelemetry/instrumentation-http");
const instrumentation_pino_1 = require("@opentelemetry/instrumentation-pino");
const instrumentation_undici_1 = require("@opentelemetry/instrumentation-undici");
const sdk_node_1 = require("@opentelemetry/sdk-node");
const sdk_trace_base_1 = require("@opentelemetry/sdk-trace-base");
const semantic_conventions_1 = require("@opentelemetry/semantic-conventions");
class CustomSampler {
    shouldSample(_context, _traceId, _spanName, spanKind, attributes) {
        const ignoredRoutes = ["/metrics", "/health"];
        const httpTarget = attributes[semantic_conventions_1.SemanticAttributes.HTTP_TARGET];
        if (spanKind === api_1.SpanKind.SERVER &&
            httpTarget &&
            ignoredRoutes.includes(httpTarget.toString())) {
            return { decision: sdk_trace_base_1.SamplingDecision.NOT_RECORD };
        }
        // fallback
        return { decision: sdk_trace_base_1.SamplingDecision.RECORD_AND_SAMPLED };
    }
    toString() {
        return "CustomSampler";
    }
}
const sdk = new sdk_node_1.NodeSDK({
    traceExporter: new exporter_trace_otlp_proto_1.OTLPTraceExporter(),
    instrumentations: [
        new instrumentation_http_1.HttpInstrumentation({
            requireParentforOutgoingSpans: true
        }),
        new instrumentation_undici_1.UndiciInstrumentation({
            requireParentforSpans: true
        }),
        new instrumentation_fastify_1.FastifyInstrumentation(),
        new instrumentation_pino_1.PinoInstrumentation()
    ],
    sampler: new sdk_trace_base_1.ParentBasedSampler({ root: new CustomSampler() })
});
sdk.start();
//# sourceMappingURL=instrumentation.js.map