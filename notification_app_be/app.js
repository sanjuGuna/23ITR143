import express from 'express';

const app=express();
app.get('/',(req,res)=>{
    res.send("server is running");
})

async function Log(stack, level, packageName, message) {
    try {
        const response = await fetch('http://4.224.186.213/evaluation-service/logs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                stack,
                level,
                package: packageName,
                message
            })
        });
        
        return await response.json();
    } catch (error) {
        console.error("Failed to send log:", error);
    }
}
app.listen(3000,()=>{
    console.log("server running in port 3000");
})
