import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../Redux/reducers/userSlice";
import { currentToken } from "../../Redux/reducers/authSlice";
import { useEffect } from "react";
import { fetchUserData } from "../../Redux/fetch/fetchUserData";
import { fetchPutUsername } from "../../Redux/fetch/fetchPutUsername";

export default function EditUserData() {
    const dispatch = useDispatch();

    const [isEditing, setEditing] = useState(false);

    const userData = useSelector(getUserData);
    console.log({ userData });

    const userName = userData.payload.user.userName;
    console.log({ userName });

    const firstName = userData.payload.user.firstName;
    console.log({ firstName });

    const lastName = userData.payload.user.lastName;
    console.log({ lastName });

    const [isUserName, setUsername] = useState("");
    console.log({ isUserName });

    const token = useSelector(currentToken);

    const changeUsername = (e) => {
        e.preventDefault();
        dispatch(fetchPutUsername({ token, newUserName: isUserName }));
        setEditing(false);
    };

    useEffect(() => {
        dispatch(fetchUserData(token));
    }, [dispatch, token]);

    useEffect(() => {
        setUsername(userName);
    }, [userName]);

    return (
        <div>
            {isEditing ? (
                <form onSubmit={changeUsername} className="edit-content">
                    <div className="input-wrapper">
                        <div className="userDataInput">
                            <p className="p-input">Username</p>
                            <input
                                className="input-username"
                                type="text"
                                id="username"
                                value={isUserName}
                                onChange={(e) => setUsername(e.target.value)}
                                onClick={() => setUsername("")}
                            />
                        </div>
                        <div className="userDataInput">
                            <p className="p-input">First name</p>
                            <input
                                type="text"
                                id="firsName"
                                value={firstName}
                                disabled
                            />
                        </div>
                        <div className="userDataInput">
                            <p className="p-input">Last name</p>
                            <input
                                type="text"
                                id="lastName"
                                value={lastName}
                                disabled
                            />
                        </div>
                    </div>

                    <div className="button-edit">
                        <button type="submit" className="edit-button save">
                            Save
                        </button>
                        <button
                            onClick={() => setEditing(false)}
                            className="edit-button cancel"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            ) : (
                <div>
                    <button
                        onClick={() => setEditing(true)}
                        className="edit-button"
                    >
                        Edit Name
                    </button>
                </div>
            )}
        </div>
    );
}
