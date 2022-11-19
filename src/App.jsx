import logo from './logo.svg';
import styles from './App.module.css';

function App() {
  return (
    <>
      <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div class="shrink-0">
          <img class="h-12 w-12" src={logo} alt="Solid Logo" />
        </div>
        <div>
          <div class="text-xl font-medium text-black">Solid App</div>
          <p class="text-slate-500">Styles powered by Tailwind</p>
        </div>
      </div>

      <ul class="p-6 divide-y divide-slate-200">
          <li class="flex py-4 first:pt-0 last:pb-0">
            <img class="h-12 w-12" src={logo} alt="Solid Logo" />
            <div class="ml-3 overflow-hidden">
              <p class="text-sm font-medium text-slate-900">Pedro</p>
              <p class="text-sm text-slate-500 truncate">pedro@solidexemple.com</p>
            </div>
          </li>
          <li class="flex py-4 first:pt-0 last:pb-0">
            <img class="h-12 w-12" src={logo} alt="Solid Logo" />
            <div class="ml-3 overflow-hidden">
              <p class="text-sm font-medium text-slate-900">Jose</p>
              <p class="text-sm text-slate-500 truncate">jose@solidexemple.com</p>
            </div>
          </li>
          <li class="flex py-4 first:pt-0 last:pb-0">
            <img class="h-12 w-12" src={logo} alt="Solid Logo" />
            <div class="ml-3 overflow-hidden">
              <p class="text-sm font-medium text-slate-900">Juan</p>
              <p class="text-sm text-slate-500 truncate">juan@solidexemple.com</p>
            </div>
          </li>
          <li class="flex py-4 first:pt-0 last:pb-0">
            <img class="h-12 w-12" src={logo} alt="Solid Logo" />
            <div class="ml-3 overflow-hidden">
              <p class="text-sm font-medium text-slate-900">Miguel</p>
              <p class="text-sm text-slate-500 truncate">miguel@solidexemple.com</p>
            </div>
          </li>
      </ul>
      {/* items-center flex */}
      <div class="">
        <button class="mx-auto w-1/3 p-2 bg-sky-500 hover:bg-sky-700 ...">
          Save changes
        </button>

        <button class="mx-auto w-1/3 p-2 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
          Save changes
        </button>
      </div>

      <a href="#" class="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
        <div class="flex items-center space-x-3">
          <svg class="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24"></svg>
          <h3 class="text-slate-900 group-hover:text-white text-sm font-semibold">New project</h3>
        </div>
        <p class="text-slate-500 group-hover:text-white text-sm">Create a new project from a variety of starting templates.</p>
      </a>
    </>
  );
}

export default App;
