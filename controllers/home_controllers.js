import Post from '../models/post.js';
import User from '../models/user.js';

export const home = async (req, res) => {

    console.log("home");
    return res.render('home', {
        title: "Home"
    }); 
    
}

// export default home;