import profilePic from "@assets/profilePic.jpg";

export const DUProfileCard = ({ user }) => {
  return (
    <div>
        <div class="avatar avatar-online">
            <div class="w-24 h-24 rounded-full">
                <img src={profilePic} />
            </div>
        </div>

          <div className="flex-row flex align-middle items-center ">
            <h2 className="text-2xl font-bold">{user.username}</h2>
            <div class="ml-2 mr-2 badge badge-secondary">
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
