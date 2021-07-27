import { DepartamentosFundacion } from '../models/DepartamentosFundacion';
import { UserDonator } from '../models/userDonator';

const mayorDeEdad = 18;
const porcentajeNinos = 0.40;
const porcentajeCaridad = 0.40;
const porcentajeContruccion = 0.20;
// eslint-disable-next-line
export const manejadorDonaciones = (
  usuarioDonante: UserDonator,
  globalState: DepartamentosFundacion,
  setInitialSate: (p: DepartamentosFundacion) => void,
) => {
  if (usuarioDonante.edad < mayorDeEdad) {
    const nuevoEstado: DepartamentosFundacion = {
      ...globalState,
      dineroTotal:
        Number(usuarioDonante.cantidadDonada) + Number(globalState.dineroTotal),
      ninos: Number(globalState.ninos) + Number(usuarioDonante.cantidadDonada),
      personasDonantes: [...globalState.personasDonantes, usuarioDonante],
    };
    setInitialSate(nuevoEstado);
  } else {
    const nuevoEstado: DepartamentosFundacion = {
      dineroTotal:
        Number(usuarioDonante.cantidadDonada) + Number(globalState.dineroTotal),
      caridad:
        Number(globalState.caridad) +
        Number(usuarioDonante.cantidadDonada * porcentajeCaridad),
      ninos:
        Number(globalState.ninos) + Number(usuarioDonante.cantidadDonada * porcentajeNinos),
      construccion:
        Number(globalState.construccion) +
        Number(usuarioDonante.cantidadDonada * porcentajeContruccion),
      personasDonantes: [...globalState.personasDonantes, usuarioDonante],
    };
    setInitialSate(nuevoEstado);
  }
};
