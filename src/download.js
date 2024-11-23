export const download = async (link, filename) => {
    try {
        const response = await fetch(link); // Fetch the file from the link
        if (!response.ok) throw new Error('Network response was not ok');
        
        const blob = await response.blob(); // Convert the response to a Blob
        const url = URL.createObjectURL(blob); // Create a temporary URL
        
        const element = document.createElement('a');
        element.href = url;
        element.download = filename || 'downloaded_file'; // Specify the filename
        document.body.appendChild(element);
        element.click(); // Simulate the click
        document.body.removeChild(element);

        URL.revokeObjectURL(url); // Clean up the temporary URL
    } catch (error) {
        console.error('Error downloading file:', error);
    }
};


    /*const download = (link) => {
        var element = document.createElement('a');
        element.setAttribute('href', link);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }*/

        /*const download = (link, filename) => {
            var element = document.createElement('a');
            element.setAttribute('href', link);
            element.setAttribute('download', filename || ''); // Add the 'download' attribute
            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
        };*/
        