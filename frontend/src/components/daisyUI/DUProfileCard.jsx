import profilePic from "@assets/profilePic.jpg";
import college from "@assets/college.jpg";

export const DUProfileCard = ({ user }) => {
  return (
    <div>
        <div className="h-32 rounded-2xl" style={{backgroundImage: "url(" + college + ")", backgroundSize: "cover"}}>
        </div>
        <div className="avatar avatar-online -mt-16">
            <div className="w-24 h-24 rounded-full border-base-100 border-4">
                <img src={profilePic} />
            </div>
        </div>



          <div className="flex-row flex align-middle items-center ">
            <h2 className="text-2xl font-bold">{user.username}</h2>
            <div className="ml-2 mr-2 badge badge-secondary">
                {String(user.role).toUpperCase()}
            </div>
            <div class="badge badge-primary">
                {String(user.email).includes("@ubiobio.cl") ? "DOCENTE UBB" : "ALUMNO UBB"}
            </div>
          </div>

          <p>
            {"@" + String(user.email).split("@")[0]}
          </p>
    </div>
  );
};

export default DUProfileCard;
