import { LoginForm } from "@/components/LoginForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Welcome to SkillX App</h1>
        <LoginForm />
      </div>
    </div>
  );
}
