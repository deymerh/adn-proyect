export const obtenerCuentasUser = async () => {
  try {
    const res = await fetch(
      'https://run.mocky.io/v3/9cf7c14b-e879-4d92-9803-1f52f041fd85',
    );
    const response = await res.json();
    return response;
  } catch (error) {
    return Error('Counts not found');
  }
};
