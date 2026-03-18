import { useContext } from "react";
import UserContext from "../context/UserContext";
import Card from "./Card";

function Profile() {
  const { user } = useContext(UserContext);

  return (
    <div className="w-80 bg-gray-700 p-6 mx-auto mt-10 rounded-md">
      {!user ? (
        <p className="text-red-500 text-center pt-8">
          Please login to view profile.
        </p>
      ) : (
        <>
          <h1 className="text-center text-xl font-semibold text-white mb-4">
            Welcome, <span className="text-orange-500">{user.username}</span>!
          </h1>
          
          <Card />
        </>
      )}
    </div>
  );
}

export default Profile;
