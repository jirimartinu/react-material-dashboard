import * as Cookies from 'js-cookie';

export const FetchHeader = (
    body: BodyInit | null = null,
    method: string = 'POST', 
    contentType: string = 'application/json',
    addCSFR: boolean = true,
    addCredentials: boolean = true
): RequestInit => {
    const options = {
        method,
        headers: { 
            'Content-Type': contentType, 
        }
    }

    if (body !== null) {
        options['body'] = body;
    }

    if (addCSFR === true) {
        options['headers']['X-XSRF-TOKEN'] = Cookies.get('XSRF-REQUEST-TOKEN');
    }

    if (addCredentials === true) {
        options['credentials'] = 'include';
    }

    return options;
}