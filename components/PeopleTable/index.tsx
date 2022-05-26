import React, { FunctionComponent } from 'react';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

// TODO: Remove after backend implementation
import { randFirstName, randLastName, randPastDate, randPhoneNumber, randEmail } from '@ngneat/falso';

import { Person } from '../../types';

const mockData = (function (): Person[] {
  return Array.from({ length: 10 }).map(() => ({
    firstName: randFirstName(),
    lastName: randLastName(),
    birthDate: randPastDate(),
    email: randEmail(),
    phone: randPhoneNumber(),
  }));
})();

const PeopleTable: FunctionComponent = () => {
  return (
    <Table variant='simple'>
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>Data de Nascimento</Th>
          <Th>Telefone</Th>
          <Th>Tipo de Vínculo</Th>
        </Tr>
      </Thead>
      <Tbody>
        {mockData.map((person) =>
          <Tr key={`${person.phone}`}>
            <Td>{`${person.firstName} ${person.lastName}`}</Td>
            <Td>{person.birthDate.toISOString()}</Td>
            <Td>{person.phone}</Td>
          </Tr>)}
      </Tbody>
    </Table>
  );
};

export default PeopleTable;