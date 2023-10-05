import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../Redux/reducers/userSlice";
import { currentToken } from "../../Redux/reducers/authSlice";
import { useEffect } from "react";
import { fetchUserData } from "../../Redux/fetch/fetchUserData";

export default function EditUserData() {
    const dispatch = useDispatch();

    const [isUserName, setUsername] = useState("");
    const [isEditing, setEditing] = useState(false);

    const userData = useSelector(getUserData);
    console.log({ userData });
    const userName = userData.payload.user.userName;
    console.log({ userName });
    const firstName = userData.payload.user.firstName;
    console.log({ firstName });
    const lastName = userData.payload.user.lastName;
    console.log({ lastName });

    const token = useSelector(currentToken);

    useEffect(() => {
        dispatch(fetchUserData(token));
    }, [dispatch, token]);

    return (
        <div>
            {isEditing ? (
                <div className="edit-content">
                    <div className="input-wrapper">
                        <div className="userDataInput">
                            <p className="p-input">Username</p>
                            <input
                            className="input-username"
                                type="text"
                                id="username"
                                value={userName}
                                onChange={(e) => setUsername(e.target.value)}
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
                        <button
                            onClick="DONNER FONCTION"
                            className="edit-button save"
                        >
                            Save
                        </button>{" "}
                        <button
                            onClick={() => setEditing(false)}
                            className="edit-button cancel"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
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
