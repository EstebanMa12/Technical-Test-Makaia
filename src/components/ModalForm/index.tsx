
import { useState } from 'react';

const EmailInput = ({ email, onChange }: { email: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <label htmlFor="first-name" className="text-black font-bold text-sm text-left">
        Email
      </label>
      <input
        type="text"
        id="first-name"
        className="block p-2 text-sm 
        text-gray-900 border 
        border-gray-300 
        rounded-lg w-60 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
        placeholder="Enter email address"
        value={email}
        onChange={onChange}
      />
    </div>
  );
};

const ProjectSelection = ({ projects, selectedProjects, onChange }: { projects: string[], selectedProjects: string[], onChange: (project: string) => void }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <label htmlFor="" className="font-semibold mt-2">
        Projects
      </label>
      {projects.map((project) => (
        <div key={project} className="flex flex-row justify-center items-center">
          <input
            type="checkbox"
            id={`project-${project}`}
            className="mr-2"
            checked={selectedProjects.includes(project)}
            onChange={() => onChange(project)}
          />
          <label htmlFor={`project-${project}`}>{project}</label>
        </div>
      ))}
    </div>
  );
};

const PermissionSelection = ({ permission, onChange }: { permission: string, onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <label htmlFor="role" className="text-black font-bold text-sm text-left">
        Permission
      </label>
      <select
        name="role"
        id="role"
        className="block p-2 text-sm text-gray-900 border 
        border-gray-300 
        rounded-lg w-60 
        bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
        value={permission}
        onChange={onChange}
      >
        <option value="admin">Admin</option>
        <option value="can-edit">Can edit</option>
        <option value="can-view">Can view</option>
      </select>
    </div>
  );
};

const ModalForm = () => {
  const [email, setEmail] = useState('');
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [permission, setPermission] = useState('admin');

  const projects = ['Project 1', 'Project 2', 'Project 3'];

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // send invite here
  };

  return (
    <div className="w-full h-full border border-black flex justify-center items-center">
      <div className="w-[1157px] h-[466px] border-2 border-black my-32 rounded-lg bg-white shadow-xl z-50 overflow-hidden flex">
        <div className="flex justify-center items-center w-72 h-full border border-black "></div>
        <div className='p-4'>
          <h1 className="text-pink-500 font-bold text-2xl pb-4">
            Invite people to My workspace
          </h1>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-3">
                <EmailInput email={email} onChange={(e) => setEmail(e.target.value)} />
                <ProjectSelection
                  projects={projects}
                  selectedProjects={selectedProjects}
                  onChange={(project) => {
                    if (selectedProjects.includes(project)) {
                      setSelectedProjects(selectedProjects.filter((p) => p !== project));
                    } else {
                      setSelectedProjects([...selectedProjects, project]);
                    }
                  }}
                />
                <PermissionSelection permission={permission} onChange={(e) => setPermission(e.target.value)} />
              </div>
              <button
                type="submit"
                className="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-pink-500 focus:ring-blue-500 focus:border-blue-500 text-white mt-4"
              >
                Send invite
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;