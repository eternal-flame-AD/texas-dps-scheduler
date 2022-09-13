export interface webhookPayload {
    "text": string;
    "chat_id": string;
    "message_id"?: number;
    "parse_mode"?: 'MarkdownV2' | 'HTML' | 'Markdown';
    "disable_notification"?: boolean;
}

export type webhookResponse<T> = webhookError | webhookOk<T>;

export interface webhookError {
    "ok": false;
    "error_code": number;
    "description": string;
}

export interface webhookOk<T> { "ok": true; "result": T; }

export interface webhookMessage {
    "message_id": number;
    "date": number;
}