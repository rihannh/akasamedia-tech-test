import { toast, Toaster } from "sonner";

function App() {
  setTimeout(() => {
    toast("Initialized Project");
  });
  return (
    <>
      <h1 className='p-2 text-sky-500' id='12' href='s'>
        Rihan
      </h1>
      <button
        className='m-4 rounded-lg border bg-sky-500 px-5 py-2.5 text-white duration-300 hover:bg-sky-600'
        onClick={() => toast("halooo")}
      >
        Click Me
      </button>
      <Toaster position='top-right' />
    </>
  );
}

export default App;
