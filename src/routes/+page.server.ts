import { createClient } from '@supabase/supabase-js'
import { SUPABASE_ANON_KEY, SUPABASE_URL } from '$env/static/private'

export const _supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export const load = async () => {
    return {}
}

let url = 'https://bruggetrolle.ch/';

export const actions = {
    default: async ({ request }) => {
        const form: { [key: string]: FormDataEntryValue; } = Object.fromEntries(await request.formData());//await request.formData();
        console.log(form);
        // const file = form.get('file')?.toString() ?? '' as string;

        let entry: { [key: string]: string; } = {
            firstname: form.firstname?.toString() ?? '',
            lastname: form.lastname?.toString() ?? '',
            email: form.email?.toString() ?? '',
        };


        const { data, error } = await _supabase
            .from('mailingList')
            .insert([entry]);

        console.log(data, error);
        // fs.appendFile("data/mailingList.csv", Object.values(form).join(',') + '\n', 'utf8')
    }


    // if (!file) {
    //     return { status: 400, body: { error: 'No file uploaded' } };
    // }

    // try {
    //     const data = await file.text();
    //     // Process the data as needed
    //     console.log(data);
    //     return { status: 200, body: { message: 'File uploaded successfully' } };
    // } catch (error) {
    //     console.error('Error reading file:', error);
    //     return { status: 500, body: { error: 'Failed to read file' } };
    // }


    // fs.appendFile(
    //     "form-tracking/formList.csv",
    //     csvContent,
    //     "utf8",
    //     function (err: any) {
    //         if (err) {
    //             console.log(
    //                 "Some error occured - file either not saved or corrupted file saved.",
    //             );
    //         } else {
    //             console.log("It's saved!");
    //         }
    //     },
    // );
}

//export const POST: RequestHandler = async ({ request }) => {

