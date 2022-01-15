const initialState = {
  profile: {
    id: '1',
    last_name: "Иванов",
    first_Name: "igor",
    middle_name: "Иванович",
    phone: "9999",
    email:'sss',
    viber: "44444444",
    telegram: "@Ivan",
    country: "Украина",
    city: "Киев",
    street: "Крещатик",
    house: "3",
    
  },
  unitsCatalog: [
    {
      id: 1,
      unitType: "tractor1",
      image: "trac1.jpg",
      description: "Двигатель: \nГод  випуска: \nНаличие GPS \nКоличество операторов ",
      services: [
        "1. уборка снега",
        "2. перевозка гравия",
        "3. перевозка песка",
        "4. перевозка глины",
        "5. перевозка чернозема",
        "6. пахота",
        "7. посев",
        "8. разчистка ",
        "9. перевозка кирпича",
        "10. перевозка бетона",
        "11. вывоз муора",
        "12. перевозка навоза",
        "13. перевозка зерна",
        "14. преревозка камня",
        "15. рытье котлована",
        "16. рытье траншей",
        "17. перевозка жидкости",
        "18. погрузка песка",
      ],
    },
    {
      id: 2,
      unitType: "tractor2",
      image: "trac2.jpg",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using  making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and ",
      services: [
        "1. уборка снега",
        "2. перевозка глины",
        "3. перевозка чернозема",
        "4. пахота",
        "5. посев",
        "6. разчистка ",
        "7. перевозка гравия",
        "8. перевозка песка",
        "9. перевозка кирпича",
        "10. преревозка камня",
        "11. рытье котлована",
        "12. рытье траншей",
        "13. перевозка жидкости",
        "14. погрузка песка",
        "15. перевозка бетона",
        "16. вывоз муора",
        "17. перевозка навоза",
        "18. перевозка зерна",
        "19. погрузка щебня",
        "20. погрузка навоза",
        "21. погрузка кирпича",
      ],
    },
    {
      id: 3,
      unitType: "tractor3",
      image: "trac3.jpg",
      description:
        " looking at its layout more-or-less normal distribution of letters, as opposed to using  making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and ",
      services: [
        "1. перевозка кирпича",
        "2. перевозка бетона",
        "3. вывоз муора",
        "4. перевозка навоза",
        "5. перевозка зерна",
        "6. преревозка камня",
        "7. рытье котлована",
        "8. рытье траншей",
        "9. перевозка жидкости",
        "10. погрузка песка",
        "11. уборка снега",
        "12. перевозка гравия",
        "13. перевозка песка",
        "14. перевозка глины",
        "15. перевозка чернозема",
        "16. пахота",
        "17. посев",
        "18. разчистка ",
      ],
    },
  ],
  topServices: ["Уборка снега", "Вывоз снега", "Посыпка песка"],
};

const ADD_TOP_SERVICE = "ADD_TOP_SERVICE";

export const addTopServiceAction = (payload) => ({
  type: ADD_TOP_SERVICE,
  payload,
});

const ownerReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default ownerReducer;
