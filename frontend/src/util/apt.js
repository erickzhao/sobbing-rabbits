const save = apt => {
  let appointments;
  if (localStorage.getItem('appointments')) {
    appointments = JSON.parse(localStorage.getItem('appointments'));
  } else {
    appointments = [];
  }
  const newAppointments = [...appointments, { ...apt, id: Date.now() }];
  localStorage.setItem('appointments', JSON.stringify(newAppointments));
  return newAppointments;
};

const get = () => {
  return JSON.parse(localStorage.getItem('appointments'));
};

export { save, get };
