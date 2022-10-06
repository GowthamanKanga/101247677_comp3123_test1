const resolvedPromise  = () => 
{
    setTimeout(() => 
    {
        let success = {"message" : "delayed succces!"}; 
        console.log(success);

    },500);
}

const rejectedPromise = () => 
{
    setTimeout(()=> 
    {
        try
        {
            throw new Error();
        }
        catch(e)
        {
            let error = {"error" : "delayed exception!"};
            console.log(error);
        }
    },500);
};

resolvedPromise();
rejectedPromise();