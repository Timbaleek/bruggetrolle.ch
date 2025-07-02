import { promises as fs } from "fs";
import type { RequestHandler } from '@sveltejs/kit';

export const actions = {
    uploadData: async ({ request }) => {
        const form = await request.formData();
        const file = form.get('file')?.toString() ?? '' as string;

        await fs.appendFile(
            "static/mailingList.csv", file, 'utf8')

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
    }

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

