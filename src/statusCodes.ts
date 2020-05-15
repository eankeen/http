/**
 * Constants enumerating the HTTP status codes.
 *
 * All status codes defined in RFC1945 (HTTP/1.0, RFC2616 (HTTP/1.1),
 * RFC2518 (WebDAV), RFC6585 (Additional HTTP Status Codes), and
 * RFC7538 (Permanent Redirect) are supported.
 *
 * Based on the org.apache.commons.httpclient.HttpStatus Java API
 * Based from the `http-status-codes` npm pacakge
 *
 * Ported by Bryce Neal.
 */

const statusCodes = new Map()
const statusTexts = new Map()

export const ACCEPTED = 202;
statusCodes.set(202, "Accepted");
statusTexts.set("Accepted", 202);

export const BAD_GATEWAY = 502;
statusCodes.set(502, "Bad Gateway");
statusTexts.set("Bad Gateway", 502);

export const BAD_REQUEST = 400;
statusCodes.set(400, "Bad Request");
statusTexts.set("Bad Request", 400);

export const CONFLICT = 409;
statusCodes.set(409, "Conflict");
statusTexts.set("Conflict", 409);

export const CONTINUE = 100;
statusCodes.set(100, "Continue");
statusTexts.set("Continue", 100);

export const CREATED = 201;
statusCodes.set(201, "Created");
statusTexts.set("Created", 201);

export const EXPECTATION_FAILED = 417;
statusCodes.set(417, "Expectation Failed");
statusTexts.set("Expectation Failed", 417);

export const FAILED_DEPENDENCY  = 424;
statusCodes.set(424, "Failed Dependency");
statusTexts.set("Failed Dependency", 424);

export const FORBIDDEN = 403;
statusCodes.set(403, "Forbidden");
statusTexts.set("Forbidden", 403);

export const GATEWAY_TIMEOUT = 504;
statusCodes.set(504, "Gateway Timeout");
statusTexts.set("Gateway Timeout", 504);

export const GONE = 410;
statusCodes.set(410, "Gone");
statusTexts.set("Gone", 410);

export const HTTP_VERSION_NOT_SUPPORTED = 505;
statusCodes.set(505, "HTTP Version Not Supported");
statusTexts.set("HTTP Version Not Supported", 505);

export const IM_A_TEAPOT = 418;
statusCodes.set(418, "I'm a teapot");
statusTexts.set("I'm a teapot", 418);

export const INSUFFICIENT_SPACE_ON_RESOURCE = 419;
statusCodes.set(419, "Insufficient Space on Resource");
statusTexts.set("Insufficient Space on Resource", 419);

export const INSUFFICIENT_STORAGE = 507;
statusCodes.set(507, "Insufficient Storage");
statusTexts.set("Insufficient Storage", 507);

export const INTERNAL_SERVER_ERROR = 500;
statusCodes.set(500, "Server Error");
statusTexts.set("Server Error", 500);

export const LENGTH_REQUIRED = 411;
statusCodes.set(411, "Length Required");
statusTexts.set("Length Required", 411);

export const LOCKED = 423;
statusCodes.set(423, "Locked");
statusTexts.set("Locked", 423);

export const METHOD_FAILURE = 420;
statusCodes.set(420, "Method Failure");
statusTexts.set("Method Failure", 420);

export const METHOD_NOT_ALLOWED = 405;
statusCodes.set(405, "Method Not Allowed");
statusTexts.set("Method Not Allowed", 405);

export const MOVED_PERMANENTLY = 301;
statusCodes.set(301, "Moved Permanently");
statusTexts.set("Moved Permanently", 301);

export const MOVED_TEMPORARILY = 302;
statusCodes.set(302, "Moved Temporarily");
statusTexts.set("Moved Temporarily", 302);

export const MULTI_STATUS = 207;
statusCodes.set(207, "Multi-Status");
statusTexts.set("Multi-Status", 207);

export const MULTIPLE_CHOICES = 300;
statusCodes.set(300, "Multiple Choices");
statusTexts.set("Multiple Choices", 300);

export const NETWORK_AUTHENTICATION_REQUIRED = 511;
statusCodes.set(511, "Network Authentication Required");
statusTexts.set("Network Authentication Required", 511);

export const NO_CONTENT = 204;
statusCodes.set(204, "No Content");
statusTexts.set("No Content", 204);

export const NON_AUTHORITATIVE_INFORMATION = 203;
statusCodes.set(203, "Non Authoritative Information");
statusTexts.set("Non Authoritative Information", 203);

export const NOT_ACCEPTABLE = 406;
statusCodes.set(406, "Not Acceptable");
statusTexts.set("Not Acceptable", 406);

export const NOT_FOUND = 404;
statusCodes.set(404, "Not Found");
statusTexts.set("Not Found", 404);

export const NOT_IMPLEMENTED = 501;
statusCodes.set(501, "Not Implemented");
statusTexts.set("Not Implemented", 501);

export const NOT_MODIFIED = 304;
statusCodes.set(304, "Not Modified");
statusTexts.set("Not Modified", 304);

export const OK = 200;
statusCodes.set(200, "OK");
statusTexts.set("OK", 200);

export const PARTIAL_CONTENT = 206;
statusCodes.set(206, "Partial Content");
statusTexts.set("Partial Content", 206);

export const PAYMENT_REQUIRED = 402;
statusCodes.set(402, "Payment Required");
statusTexts.set("Payment Required", 402);

export const PERMANENT_REDIRECT = 308;
statusCodes.set(308, "Permanent Redirect");
statusTexts.set("Permanent Redirect", 308);

export const PRECONDITION_FAILED = 412;
statusCodes.set(412, "Precondition Failed");
statusTexts.set("Precondition Failed", 412);

export const PRECONDITION_REQUIRED = 428;
statusCodes.set(428, "Precondition Required");
statusTexts.set("Precondition Required", 428);

export const PROCESSING = 102;
statusCodes.set(102, "Processing");
statusTexts.set("Processing", 102);

export const PROXY_AUTHENTICATION_REQUIRED = 407;
statusCodes.set(407, "Proxy Authentication Required");
statusTexts.set("Proxy Authentication Required", 407);

export const REQUEST_HEADER_FIELDS_TOO_LARGE = 431;
statusCodes.set(431, "Request Header Fields Too Large");
statusTexts.set("Request Header Fields Too Large", 431);

export const REQUEST_TIMEOUT = 408;
statusCodes.set(408, "Request Timeout");
statusTexts.set("Request Timeout", 408);

export const REQUEST_TOO_LONG = 413;
statusCodes.set(413, "Request Entity Too Large");
statusTexts.set("Request Entity Too Large", 413);

export const REQUEST_URI_TOO_LONG = 414;
statusCodes.set(414, "Request-URI Too Long");
statusTexts.set("Request-URI Too Long", 414);

export const REQUESTED_RANGE_NOT_SATISFIABLE = 416;
statusCodes.set(416, "Requested Range Not Satisfiable");
statusTexts.set("Requested Range Not Satisfiable", 416);

export const RESET_CONTENT = 205;
statusCodes.set(205, "Reset Content");
statusTexts.set("Reset Content", 205);

export const SEE_OTHER = 303;
statusCodes.set(303, "See Other");
statusTexts.set("See Other", 303);

export const SERVICE_UNAVAILABLE = 503;
statusCodes.set(503, "Service Unavailable");
statusTexts.set("Service Unavailable", 503);

export const SWITCHING_PROTOCOLS = 101;
statusCodes.set(101, "Switching Protocols");
statusTexts.set("Switching Protocols", 101);

export const TEMPORARY_REDIRECT = 307;
statusCodes.set(307, "Temporary Redirect");
statusTexts.set("Temporary Redirect", 307);

export const TOO_MANY_REQUESTS = 429;
statusCodes.set(429, "Too Many Requests");
statusTexts.set("Too Many Requests", 429);

export const UNAUTHORIZED = 401;
statusCodes.set(401, "Unauthorized");
statusTexts.set("Unauthorized", 401);

export const UNPROCESSABLE_ENTITY = 422;
statusCodes.set(422, "Unprocessable Entity");
statusTexts.set("Unprocessable Entity", 422);

export const UNSUPPORTED_MEDIA_TYPE = 415;
statusCodes.set(415, "Unsupported Media Type");
statusTexts.set("Unsupported Media Type", 415);

export const USE_PROXY = 305;
statusCodes.set(305, "Use Proxy");
statusTexts.set("Use Proxy", 305);


export function getStatusText(statusCode: number) {
  return statusCodes.get(statusCode)
};

export function getStatusCode(reasonPhrase: string) {
  return statusTexts.get(reasonPhrase)
};