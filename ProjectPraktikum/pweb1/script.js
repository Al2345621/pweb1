const postData = async () => {
    const dataForm = {
      nama: document.getElementById('nama').value,
      email: document.getElementById('email').value,  
      keterangan: document.getElementById('message').value
    };
  
    console.log(dataForm)
  
    //Proses HTTP Request
    try {
      const response = await fetch("https://api-service-murex.vercel.app/client", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(dataForm),
      });
      //Validasi Respon Server
      if (!response.ok) {
        throw new Error("Error " + response.statusText);
      }
      //Penanganan Respon
      const data = await response.json();
      alert( data[0].message);
      //Penanganan Error
    } catch (err) {
      console.error("error", err);
    }
  };