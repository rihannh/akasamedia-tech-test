import Navbar from "../organisms/Navbar";
import Button from "../atoms/Button";

export default function DashboardPage() {
  return (
    <>
      <Navbar></Navbar>
      <div className='container flex justify-center'>
        <Button>Add Task</Button>
      </div>
    </>
  );
}
