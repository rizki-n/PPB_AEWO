import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const renderCalendarGrid = () => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const startingDay = firstDayOfMonth.getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  
    const calendarGrid = [];
    let dayCounter = 1;
  
    // Render the row for days of the week
    calendarGrid.push(
      <View key="daysOfWeek" style={styles.calendarRow}>
        {daysOfWeek.map((day) => (
          <View key={day} style={styles.dayOfWeekCell}>
            <Text style={styles.dayOfWeekText}>{day}</Text>
          </View>
        ))}
      </View>
    );
  
    for (let row = 0; row < 6; row++) {
      const calendarRow = [];
      for (let col = 0; col < 7; col++) {
        if ((row === 0 && col < startingDay) || dayCounter > daysInMonth) {
          calendarRow.push(
            <View key={`${row}-${col}`} style={styles.emptyCell}>
              <Text>&nbsp;</Text>
            </View>
          );
        } else {
          const date = new Date(currentYear, currentMonth, dayCounter);
          calendarRow.push(
            <TouchableOpacity
              key={`${row}-${col}`}
              style={[
                styles.dateCell,
                selectedDate === date.toISOString().split('T')[0] && styles.selectedDateCell,
              ]}
              onPress={() => handleDateSelect(date.toISOString().split('T')[0])}
            >
              <Text style={styles.dateText}>{dayCounter}</Text>
            </TouchableOpacity>
          );
          dayCounter++;
        }
      }
      calendarGrid.push(
        <View key={row} style={styles.calendarRow}>
          {calendarRow}
        </View>
      );
    }
  
    return calendarGrid;
  };
  
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handlePreviousMonth}>
          <Text style={styles.navigationButton}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.monthText}>{`${currentMonth + 1}/${currentYear}`}</Text>
        <TouchableOpacity onPress={handleNextMonth}>
          <Text style={styles.navigationButton}>{'>'}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.selectedDate}>{selectedDate}</Text>
      <View style={styles.calendarGrid}>{renderCalendarGrid()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  navigationButton: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  monthText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  selectedDate: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  calendarGrid: {
    flexDirection: 'column',
  },
  calendarRow: {
    flexDirection: 'row',
  },
  emptyCell: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5
  },
  dateCell: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5
  },
  selectedDateCell: {
    backgroundColor: '#f5f5f5',
  },
  dateText: {
    fontSize: 16,
  },
  dayOfWeekCell: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    marginHorizontal: 5
  },
  dayOfWeekText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  
  
});

export default Calendar;
