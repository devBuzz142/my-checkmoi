export interface UserType {
  id: string;
  name: string;
  email: string;
  image: string;
  temperature: number;
}

export const dummyUser: UserType = {
  id: '123123',
  name: 'devbuzz142',
  email: 'devbuzz142@gmail.com',
  image:
    'https://i.picsum.photos/id/962/200/300.jpg?hmac=wvuv8EVOoNE5J3sBkBx-1wcVHNbgJ_Z1dS98YhnShjM',
  temperature: 20,
};

interface SimpleStudyType {
  id: string;
  name: string;
  thumbnail: string;
}

const dummySimpleStudy: SimpleStudyType = {
  id: '12312312312',
  name: 'dummySimpleStudy',
  thumbnail:
    'https://i.picsum.photos/id/962/200/300.jpg?hmac=wvuv8EVOoNE5J3sBkBx-1wcVHNbgJ_Z1dS98YhnShjM',
};

export interface TopbarUserType extends UserType {
  studies: SimpleStudyType[];
}

export const dummyTopbarUser: TopbarUserType = {
  ...dummyUser,
  studies: [dummySimpleStudy],
};
