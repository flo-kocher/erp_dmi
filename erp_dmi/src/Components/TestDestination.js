
import { useUser, useUserUpdate } from "../Context/userContext";
// import { signin } from "./apicalls";

export default function TestDestination() {

	const [user] = useUser();
	return <>
		<h1>Bonjour {user.first_name} {user.name} !</h1>
	</>;
}
