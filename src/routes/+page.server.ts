import { createClient } from '@supabase/supabase-js'
import { SUPABASE_ANON_KEY, SUPABASE_URL } from '$env/static/private'

export const _supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export const load = async () => {
    return {}
}

export const actions = {
    default: async ({ request }) => {
        const form: { [key: string]: FormDataEntryValue; } = Object.fromEntries(await request.formData());
        console.log(form);

        let entry: { [key: string]: string; } = {
            firstname: form.firstname?.toString() ?? '',
            lastname: form.lastname?.toString() ?? '',
            email: form.email?.toString() ?? '',
        };


        const { data, error } = await _supabase
            .from('mailingList')
            .insert([entry]);

        //console.log(data, error);

    }

}

