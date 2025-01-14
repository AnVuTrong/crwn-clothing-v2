import { signInWithGoogle, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
	const logGoogleUser = async () => {
		const {user} = await signInWithGoogle();
		console.log(user);
		const userDocRef = await createUserDocumentFromAuth(user);
		console.log(userDocRef);
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
