export function appendAuthHeader(headers: Headers): Headers {
    headers.append(
        'Ocp-Apim-Subscription-Key',
        'c91b8409ed674a5eaf84ca423cd072c3',
    );
    return headers;
}
