
import { useState } from 'react';
import DropdownCheckbox from '../DropdownCheckbox';

const EmailInput = ({ email, onChange }: { email: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <input
        type="text"
        id="email"
        className="block p-2 text-sm 
        text-gray-900 
        rounded-lg w-72 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
        placeholder="Enter email address"
        value={email}
        onChange={onChange}
      />
    </div>
  );
};

const PermissionSelection = ({ initialPermission, onChange }: { initialPermission: string, onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void }) => {
  const [permission, setPermission] = useState<string>(initialPermission);

  const handlePermissionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPermission(e.target.value);
    onChange(e);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <select
        name="role"
        id="role"
        className="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg w-28 bg-gray-50 focus:ring-pink-500 focus:border-pink-500 focus:text-pink-700 focus:font-bold"
        value={permission}
        onChange={handlePermissionChange}
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
  const [selectedProjects, setSelectedProjects] = useState<string[]>([]);
  const [permission, setPermission] = useState('admin');

  const projects = ['Project 1', 'Project 2', 'Project 3'];

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // send invite here
  };

  return (
    <div className="w-full h-full border border-black flex justify-center items-center">
      <div className="w-[1157px] h-[466px] border-2 border-black my-32 rounded-lg bg-white shadow-xl z-50 overflow-hidden flex">
        <div className="flex justify-center items-center w-72 h-full  bg-pink-50 ">

        </div>
        <div className='p-4 '>
          <h1 className="text-pink-500 font-bold text-2xl pb-4 mb-6">
            Invite people to My workspace
          </h1>
          <div>
          <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th scope='col' className="text-left px-6 py">Email</th>
                  <th scope='col' className="text-left px-6 py">Projects</th>
                  <th scope='col' className="text-left px-6 py">Permission</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='px-6 py-2'>
                    <EmailInput email={email} onChange={(e) => setEmail(e.target.value)} />
                  </td>
                  <td className='px-6 py-2'>
                    <DropdownCheckbox
                      options={projects}
                      selectedOptions={selectedProjects}
                      onChange={(selectedProjects) => setSelectedProjects(selectedProjects)}
                    />
                  </td>
                  <td className='px-6 py-2'>
                    <PermissionSelection permission={permission} onChange={(e) => setPermission(e.target.value)} />
                  </td>
                </tr> 
                <tr>
                  <td className='px-6 py-2'>
                    <EmailInput email={email} onChange={(e) => setEmail(e.target.value)} />
                  </td>
                  <td className='px-6 py-2'>
                    <DropdownCheckbox
                      options={projects}
                      selectedOptions={selectedProjects}
                      onChange={(selectedProjects) => setSelectedProjects(selectedProjects)}
                    />
                  </td>
                  <td className='px-6 py-2'>
                    <PermissionSelection permission={permission} onChange={(e) => setPermission(e.target.value)} />
                  </td>
                </tr>
                <tr>
                  <td className='px-6 py-2'>
                    <EmailInput email={email} onChange={(e) => setEmail(e.target.value)} />
                  </td>
                  <td className='px-6 py-2'>
                    <DropdownCheckbox
                      options={projects}
                      selectedOptions={selectedProjects}
                      onChange={(selectedProjects) => setSelectedProjects(selectedProjects)}
                    />
                  </td>
                  <td className='px-6 py-2'>
                    <PermissionSelection permission={permission} onChange={(e) => setPermission(e.target.value)} />
                  </td>
                </tr>

              </tbody>
            </table>
            <div className="w-full">
              <button
                type="button"
                className="block p-2 text-sm  rounded-lg w-80 bg-white text-pink-500 mt-6 mb-8"
              >
                + Add more members
              </button>
            </div>

            <div className="flex justify-end items-center gap-3 w-full">
              <button
                type="button"
                className="block p-2 text-sm border border-gray-300 rounded-lg bg-white text-gray-500 w-20 "
              >
                Cancel
              </button>
              <button
                type="submit"
                className="block p-2 text-sm border border-gray-300 rounded-lg w-32 bg-pink-500 text-white"
              >
                Send invites
              </button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;