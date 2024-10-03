const layout = ({ children }) => {
  return (
    <>
      <div className="flex h-screen">
        <div className="w-1/2 bg-teal-700">
            Dashboard Menu
        </div>
        <div className="p-4 flex-1">{children}</div>
      </div>
    </>
  );
};
export default layout;
