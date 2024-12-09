import { signInWithGoogle } from "../../utils/firebase/firebase.utils";


const SignIn = () => {
	const logGoogleUser = async () => {
		const response = await signInWithGoogle();
		console.log(response);
	};

	return (
		<div>
			<h2>This is the sign in page</h2>
			<button onClick={logGoogleUser}>
				Sign in with Google
			</button>
		</div>
	);
};

export default SignIn;
