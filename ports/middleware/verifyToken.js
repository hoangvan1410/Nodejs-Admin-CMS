const verifyToken = (req, reply, done)=>  {
    const { token } = req.headers;
    console.log("aaaaaaaaaaaaaaaaaaaa")
    jwt.verify(token, 'my_jwt_secret', (err, decoded) => {
      if (err) {
        done(new Error('Unauthorized'));
      }
  
      req.user = {
        id: decoded.id, // pass in the user's info
      };
    });
  
    done();
  };