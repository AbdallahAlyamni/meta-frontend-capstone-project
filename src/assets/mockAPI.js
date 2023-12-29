const availableTimesByDate = (date, time) => {

    let allTimes = {
        '2023-12-29': ['14:00', '15:00', '16:00'],
        '2023-12-30': ['10:00', '11:00', '12:00'],
        '2023-12-31': ['14:00', '15:00', '16:00'],
        '2024-01-01': ['10:00', '11:00', '12:00'],
        '2024-01-02': ['14:00', '15:00', '16:00'],
        '2024-01-03': ['10:00', '11:00', '12:00'],
        '2024-01-04': ['14:00', '15:00', '16:00'],
        '2024-01-05': ['10:00', '11:00', '12:00'],
        '2024-01-06': ['14:00', '15:00', '16:00'],
        '2024-01-07': ['10:00', '11:00', '12:00'],
        '2024-01-08': ['14:00', '15:00', '16:00'],
        '2024-01-09': ['10:00', '11:00', '12:00'],
        '2024-01-10': ['14:00', '15:00', '16:00'],
        '2024-01-11': ['10:00', '11:00', '12:00'],
        '2024-01-12': ['14:00', '15:00', '16:00'],
        '2024-01-13': ['10:00', '11:00', '12:00'],
        '2024-01-14': ['14:00', '15:00', '16:00'],
        '2024-01-15': ['10:00', '11:00', '12:00'],
        '2024-01-16': ['14:00', '15:00', '16:00'],
        '2024-01-17': ['10:00', '11:00', '12:00'],
        '2024-01-18': ['14:00', '15:00', '16:00'],
        '2024-01-19': ['10:00', '11:00', '12:00'],
        '2024-01-20': ['14:00', '15:00', '16:00'],
        '2024-01-21': ['10:00', '11:00', '12:00'],
        '2024-01-22': ['14:00', '15:00', '16:00'],
        '2024-01-23': ['10:00', '11:00', '12:00'],
        '2024-01-24': ['14:00', '15:00', '16:00'],
        '2024-01-25': ['10:00', '11:00', '12:00'],
        '2024-01-26': ['14:00', '15:00', '16:00'],
        '2024-01-27': ['10:00', '11:00', '12:00'],
        '2024-01-28': ['14:00', '15:00', '16:00'],
        '2024-01-29': ['10:00', '11:00', '12:00'],
        '2024-01-30': ['14:00', '15:00', '16:00'],
        };

    if (localStorage.getItem(`${date} ${time}`) === null) {
        return allTimes[date];
    }
    else{

        const keysArray = Object.keys(allTimes);
        let updatedTimes = {};
        for (let index = 0; index < keysArray.length; index++) {
            const element = keysArray[index];
            let temp = []
            allTimes[element].forEach(timeElement => {
                if (localStorage.getItem(`${date} ${time}`) !== `${element} ${timeElement}`) {
                    temp.push(timeElement);
                }
            });
            updatedTimes[element]=temp;
        }
        return updatedTimes[date];
    }
  };


  const fetchAPI = (date) => {
    date = date.toISOString().split('T')[0];
        if(availableTimesByDate(date)){
            return(availableTimesByDate(date));
        }
        else{
            return (new Error('No available times for the selected date.'));
        }
  }

  const submitAPI = (formData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (formData) {
          resolve(true); // Simulate successful submission
        } else {
          reject(new Error('Form submission failed.'));
        }
      }, 1000); // Simulate API delay
    });
  };

  export{fetchAPI,submitAPI}