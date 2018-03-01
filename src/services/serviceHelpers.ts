export function appendAuthHeader(headers: Headers): Headers {
    headers.append(
        'Ocp-Apim-Subscription-Key',
        'c91b8409ed674a5eaf84ca423cd072c3',
    );
    return headers;
}

export function caseInsensitiveStringSort(strings: string[]) {
    return strings.sort((a: string, b: string) => {
        a = a.toLowerCase();
        b = b.toLowerCase();
        if (a === b) {
            return 0;
        }
        return a < b ? -1 : 1;
    });
}
