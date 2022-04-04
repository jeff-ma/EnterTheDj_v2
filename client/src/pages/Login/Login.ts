import { Cookies } from "react-cookie";

const Login = (): null => {
    const spotifyScopes: string[] = [
        "user-read-private", 
        "user-read-birthdate", 
        "user-read-email",
        "user-top-read",
        "user-library-modify",
        "user-library-read",
        "user-read-recently-played",
        "user-follow-read",
        "user-follow-modify",
        "user-read-playback-state",
        "playlist-read-private",
        "playlist-read-collaborative",
        "playlist-modify-public",
        "playlist-modify-private",
        "ugc-image-upload"
    ];
    const cookies: Cookies = new Cookies();
    const accessToken: string | undefined = cookies.get("access_token");
    if (accessToken) {
        // if there is a cookie for access token redirect user to home page
        window.location.href = "/";
    } else {
        // replace the react port 3002 with node.js port 3001 so that redirection from spotify won't break app
        const REACT_PORT: string = (process.env.REACT_APP_REACT_PORT as string);
        const NODE_PORT: string = (process.env.REACT_APP_NODE_PORT as string);
        let location = window.location.origin.replace(REACT_PORT, NODE_PORT);
        window.location.href = encodeURI(`https://accounts.spotify.com/authorize?client_id=2d6223f5a7d74315a03e819aee4e3934&response_type=code&redirect_uri=${location}/authorize&state=${location}/authorize&scope=${spotifyScopes.join(" ")}&show_dialog=false`);
    }
    return null;
}

export default Login;