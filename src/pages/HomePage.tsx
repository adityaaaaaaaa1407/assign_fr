import { useAuthStore } from "./../store/authStore";

const HomePage = () => {
  const { user } = useAuthStore();
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-96">
        <h1 className="text-2xl font-bold mb-4">User Information</h1>

        <div className="mb-2">
          <span className="font-semibold">Email:</span> {user.email}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
