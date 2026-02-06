const DAYS = ['', 'CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
const SLOTS = ['Tiết 1', 'Tiết 2', 'Tiết 3', 'Tiết 4', 'Tiết 5'];

// Language translations
const TRANSLATIONS = {
  vi: {
    app_title: 'Lịch Học Của Tôi',
    settings_btn: '⚙️ Cài đặt TKB',
    add_btn: '+ Thêm Môn',
    week_label: 'Tuần học:',
    prev_btn: '← Trước',
    next_btn: 'Sau →',
    days: ['', 'CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
    slot_label: 'Tiết',
    slots: ['Tiết 1', 'Tiết 2', 'Tiết 3', 'Tiết 4', 'Tiết 5'],
    settings_title: '⚙️ Cài Đặt Thời Khóa Biểu',
    validity_label: 'Thời gian hiệu lực của TKB',
    from_label: 'Từ ngày',
    to_label: 'Đến ngày',
    permanent_label: 'TKB vĩnh viễn (không hết hạn, sử dụng cho nhiều năm)',
    cancel: 'Hủy',
    save_settings: '💾 Lưu cài đặt',
    permanent_info: '📌 Thời khóa biểu vĩnh viễn',
    validity_info: '📅 Hiệu lực:',
    expired_message: '⏰ Thời khóa biểu đã hết hạn. Vui lòng tạo thời khóa biểu mới hoặc cập nhật thời gian trong Cài đặt TKB.',
    subject_label: 'Môn:',
    room_label: 'Phòng:',
    teacher_label: 'GV:',
    select_day: 'Chọn Thứ',
    select_slot: 'Chọn Tiết',
    day_full_warning: '🚫 Thứ này đã đủ 5 tiết, không thể thêm môn mới',
    add_subject_title: '📝 Thêm Môn Học',
    edit_subject_title: '✏️ Sửa Môn Học',
    subject_name: 'Tên Môn Học',
    room: 'Phòng Học (tùy chọn)',
    teacher: 'Giảng Viên (tùy chọn)',
    select_icon: 'Chọn Icon',
    choose_color: '🎨 Chọn Màu',
    brightness: '☀️ Độ sáng',
    darkness: '🌙 Độ đậm',
    save: '💾 Lưu',
    delete_btn: '🗑️ Xóa',
    add_mode: 'Thêm mới',
    edit_mode: 'Chỉnh sửa',
    emoji_tab: 'Emoji',
    custom_tab: 'Tùy chỉnh'
  },
  en: {
    app_title: 'My Schedule',
    settings_btn: '⚙️ Schedule Settings',
    add_btn: '+ Add Subject',
    week_label: 'Week:',
    prev_btn: '← Previous',
    next_btn: 'Next →',
    days: ['', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    slot_label: 'Period',
    slots: ['Period 1', 'Period 2', 'Period 3', 'Period 4', 'Period 5'],
    settings_title: '⚙️ Schedule Settings',
    validity_label: 'Schedule Validity Period',
    from_label: 'From',
    to_label: 'To',
    permanent_label: 'Permanent Schedule (no expiration, use for multiple years)',
    cancel: 'Cancel',
    save_settings: '💾 Save Settings',
    permanent_info: '📌 Permanent Schedule',
    validity_info: '📅 Valid:',
    expired_message: '⏰ Schedule has expired. Please create a new schedule or update the dates in Schedule Settings.',
    subject_label: 'Subject:',
    room_label: 'Room:',
    teacher_label: 'Teacher:',
    select_day: 'Select Day',
    select_slot: 'Select Period',
    day_full_warning: '🚫 This day already has 5 periods, cannot add more',
    add_subject_title: '📝 Add Subject',
    edit_subject_title: '✏️ Edit Subject',
    subject_name: 'Subject Name',
    room: 'Room (optional)',
    teacher: 'Teacher (optional)',
    select_icon: 'Select Icon',
    choose_color: '🎨 Choose Color',
    brightness: '☀️ Brightness',
    darkness: '🌙 Darkness',
    save: '💾 Save',
    delete_btn: '🗑️ Delete',
    add_mode: 'Adding',
    edit_mode: 'Editing',
    emoji_tab: 'Emoji',
    custom_tab: 'Custom'
  }
};

// Translation dictionary for subject names and rooms
const SUBJECT_TRANSLATIONS = {
  'vi_to_en': {
    'toán': 'math',
    'toán cao cấp': 'advanced math',
    'toán học': 'mathematics',
    'văn': 'literature',
    'văn học': 'literature',
    'tiếng anh': 'english',
    'anh văn': 'english',
    'vật lý': 'physics',
    'hóa học': 'chemistry',
    'sinh học': 'biology',
    'lịch sử': 'history',
    'địa lý': 'geography',
    'tin học': 'computer science',
    'công nghệ thông tin': 'information technology',
    'thể dục': 'physical education',
    'âm nhạc': 'music',
    'mỹ thuật': 'art',
    'gdcd': 'civic education',
    'giáo dục công dân': 'civic education',
    'khoa học': 'science',
    'kỹ thuật': 'technology',
    'kinh tế': 'economics',
    'triết học': 'philosophy',
    'tâm lý học': 'psychology',
    'xã hội học': 'sociology',
    'kế toán': 'accounting',
    'quản trị': 'management',
    'marketing': 'marketing',
    'tài chính': 'finance',
    'luật': 'law',
    'y học': 'medicine',
    'dược': 'pharmacy',
    'kiến trúc': 'architecture',
    'thiết kế': 'design',
    'điện tử': 'electronics',
    'cơ khí': 'mechanical engineering',
    'phòng': 'room',
    'lớp': 'class',
    'hội trường': 'auditorium',
    'phòng thí nghiệm': 'laboratory',
    'phòng máy': 'computer lab',
    'sân': 'yard',
    'sân vận động': 'stadium'
  },
  'en_to_vi': {
    'math': 'toán',
    'advanced math': 'toán cao cấp',
    'mathematics': 'toán học',
    'literature': 'văn',
    'english': 'tiếng anh',
    'physics': 'vật lý',
    'chemistry': 'hóa học',
    'biology': 'sinh học',
    'history': 'lịch sử',
    'geography': 'địa lý',
    'computer science': 'tin học',
    'information technology': 'công nghệ thông tin',
    'physical education': 'thể dục',
    'music': 'âm nhạc',
    'art': 'mỹ thuật',
    'civic education': 'gdcd',
    'science': 'khoa học',
    'technology': 'kỹ thuật',
    'economics': 'kinh tế',
    'philosophy': 'triết học',
    'psychology': 'tâm lý học',
    'sociology': 'xã hội học',
    'accounting': 'kế toán',
    'management': 'quản trị',
    'marketing': 'marketing',
    'finance': 'tài chính',
    'law': 'luật',
    'medicine': 'y học',
    'pharmacy': 'dược',
    'architecture': 'kiến trúc',
    'design': 'thiết kế',
    'electronics': 'điện tử',
    'mechanical engineering': 'cơ khí',
    'room': 'phòng',
    'class': 'lớp',
    'auditorium': 'hội trường',
    'laboratory': 'phòng thí nghiệm',
    'computer lab': 'phòng máy',
    'yard': 'sân',
    'stadium': 'sân vận động'
  }
};

function translateText(text, fromLang, toLang) {
  if (!text) return text;
  
  const dict = fromLang === 'vi' && toLang === 'en' 
    ? SUBJECT_TRANSLATIONS.vi_to_en 
    : SUBJECT_TRANSLATIONS.en_to_vi;
  
  const lowerText = text.toLowerCase().trim();
  
  if (dict[lowerText]) {
    const translated = dict[lowerText];
    if (text[0] === text[0].toUpperCase()) {
      return translated.charAt(0).toUpperCase() + translated.slice(1);
    }
    return translated;
  }
  
  let result = text;
  Object.keys(dict).sort((a, b) => b.length - a.length).forEach(key => {
    const regex = new RegExp(key, 'gi');
    result = result.replace(regex, dict[key]);
  });
  
  return result;
}

let currentLanguage = 'vi';

function loadLanguage() {
  const saved = localStorage.getItem('language');
  return saved || 'vi';
}

function saveLanguage(lang) {
  localStorage.setItem('language', lang);
}

function t(key) {
  return TRANSLATIONS[currentLanguage][key] || key;
}

let tempSelectedLanguage = null;

function changeLanguage(lang) {
  tempSelectedLanguage = lang;
}

function applyLanguageChange(lang) {
  const oldLang = currentLanguage;
  currentLanguage = lang;
  saveLanguage(lang);
  
  if (oldLang !== lang) {
    let data = loadSchedule();
    data = data.map(item => ({
      ...item,
      name: translateText(item.name, oldLang, lang),
      room: translateText(item.room, oldLang, lang)
    }));
    saveSchedule(data);
  }
  
  updateAllText();
  render();
}

function updateAllText() {
  const safeSetText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };
  
  safeSetText('appTitle', t('app_title'));
  safeSetText('settingsBtn', t('settings_btn'));
  safeSetText('addBtn', t('add_btn'));
  safeSetText('weekLabel', t('week_label'));
  safeSetText('prevBtn', t('prev_btn'));
  safeSetText('nextBtn', t('next_btn'));
  safeSetText('settingsTitle', t('settings_title'));
  safeSetText('saveSettingsBtn', t('save_settings'));
  
  safeSetText('labelSubjectName', t('subject_name'));
  safeSetText('labelRoom', t('room'));
  safeSetText('labelTeacher', t('teacher'));
  safeSetText('labelSelectDay', t('select_day'));
  safeSetText('labelSelectSlot', t('select_slot'));
  safeSetText('labelSelectIcon', t('select_icon'));
  safeSetText('labelChooseColor', t('choose_color'));
  safeSetText('labelBrightness', t('brightness'));
  safeSetText('labelDarkness', t('darkness'));
  safeSetText('btnDelete', t('delete_btn'));
  safeSetText('btnCancel', t('cancel'));
  safeSetText('btnSave', t('save'));
  safeSetText('emojiTab', t('emoji_tab'));
  safeSetText('customTab', t('custom_tab'));
  
  const resetAllBtn = document.getElementById('resetAllBtn');
  if (resetAllBtn) {
    resetAllBtn.textContent = currentLanguage === 'vi' ? '⚠️ Xóa tất cả thời khóa biểu' : '⚠️ Reset';
  }
  
  const deleteDataLabel = document.getElementById('deleteDataLabel');
  if (deleteDataLabel) {
    deleteDataLabel.textContent = currentLanguage === 'vi' ? '🗑️ Xóa dữ liệu' : '🗑️ Delete Data';
  }
  
  const namePlaceholder = currentLanguage === 'vi' ? 'Ví dụ: Toán Cao Cấp' : 'e.g: Advanced Math';
  const roomPlaceholder = currentLanguage === 'vi' ? 'Ví dụ: A101' : 'e.g: A101';
  const teacherPlaceholder = currentLanguage === 'vi' ? 'Ví dụ: Nguyễn Văn A' : 'e.g: John Smith';
  
  const nameInput = document.getElementById('inputName');
  const roomInput = document.getElementById('inputRoom');
  const teacherInput = document.getElementById('inputTeacher');
  
  if (nameInput) nameInput.placeholder = namePlaceholder;
  if (roomInput) roomInput.placeholder = roomPlaceholder;
  if (teacherInput) teacherInput.placeholder = teacherPlaceholder;
  
  updateCurrentScheduleBadge();
  
  if (document.getElementById('scheduleListContainer')) {
    renderScheduleList();
  }
}

const DEFAULT_ICONS = [
  '📚', '📖', '📝', '✏️', '📐', '📊', '📈', '📉',
  '💻', '⌨️', '🖥️', '💾', '🖱️', '📱',
  '🧪', '🔬', '🔭', '⚗️', '🧬', '🦠',
  '🎨', '🖌️', '🎭', '🎪', '🎬', '📷',
  '🎵', '🎸', '🎹', '🎤', '🎧', '🎼',
  '⚽', '🏀', '🏈', '⚾', '🎾', '🏐', '🏓', '🏸',
  '🌍', '🌎', '🌏', '🗺️', '🧭', '🏔️',
  '⚛️', '🔭', '🌡️', '💡', '🔌', '⚡',
  '📜', '📋', '📄', '📃', '📑', '🗂️',
  '🏛️', '⚖️', '🗝️', '🔑', '🏆', '🎖️',
  '🧮', '🔢', '➕', '➖', '✖️', '➗',
  '🌱', '🌿', '🍀', '🌾', '🌳', '🌲'
];

let currentWeek = 1;
let currentScheduleId = 1;
let isViewingTempSchedule = false;
let editingCell = null;
let selectedDay = 2;
let selectedSlots = [];
let selectedIconIndex = 0;
let selectedIconType = 'emoji';
let customIcons = [];
let currentHue = 240;
let currentSaturation = 100;
let currentBrightness = 50;
let brightnessAdjust = 0;
let darknessAdjust = 20;

function getRealCurrentWeek() {
  const today = new Date();
  const startOfYear = new Date(2026, 0, 5);
  const diffTime = today - startOfYear;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const weekNum = Math.floor(diffDays / 7) + 1;
  return Math.max(1, Math.min(52, weekNum));
}

function canEditCurrentWeek() {
  const realWeek = getRealCurrentWeek();
  const maxEditableWeek = realWeek + 4;
  
  const canEditNormalRange = currentWeek >= realWeek && currentWeek <= maxEditableWeek;
  
  const settings = loadScheduleSettings();
  let isInTempWeekRange = false;
  
  if (settings.tempStartDate && settings.tempEndDate) {
    const tempStart = new Date(settings.tempStartDate);
    const tempEnd = new Date(settings.tempEndDate);
    const tempWeekStart = getWeekNumberFromDate(tempStart);
    const tempWeekEnd = getWeekNumberFromDate(tempEnd);
    isInTempWeekRange = currentWeek >= tempWeekStart && currentWeek <= tempWeekEnd;
  }
  
  if (isViewingTempSchedule) {
    return isInTempWeekRange;
  }
  
  return canEditNormalRange;
}

function checkEditPermission() {
  if (!canEditCurrentWeek()) {
    const realWeek = getRealCurrentWeek();
    const msg = currentLanguage === 'vi'
      ? `⚠️ Chỉ có thể chỉnh sửa thời khóa biểu từ tuần ${realWeek} đến tuần ${realWeek + 4}, hoặc các tuần trong khoảng TKB tạm thời.\nTuần hiện tại: ${currentWeek}`
      : `⚠️ You can only edit schedule from week ${realWeek} to week ${realWeek + 4}, or weeks in temporary schedule range.\nCurrent viewing week: ${currentWeek}`;
    alert(msg);
    return false;
  }
  return true;
}

function loadWeeklySchedules() {
  const key = `weeklySchedules_${currentScheduleId}`;
  const saved = localStorage.getItem(key);
  if (!saved) {
    if (currentScheduleId === 1) {
      const oldSchedule = localStorage.getItem('schedule');
      if (oldSchedule) {
        const weeklyData = {};
        weeklyData[1] = JSON.parse(oldSchedule);
        localStorage.setItem(key, JSON.stringify(weeklyData));
        return weeklyData;
      }
    }
    return {};
  }
  return JSON.parse(saved);
}

function saveWeeklySchedules(weeklyData) {
  const key = `weeklySchedules_${currentScheduleId}`;
  localStorage.setItem(key, JSON.stringify(weeklyData));
}

function loadTempWeeklySchedules() {
  const key = `tempWeeklySchedules_${currentScheduleId}`;
  const saved = localStorage.getItem(key);
  return saved ? JSON.parse(saved) : {};
}

function saveTempWeeklySchedules(weeklyData) {
  const key = `tempWeeklySchedules_${currentScheduleId}`;
  localStorage.setItem(key, JSON.stringify(weeklyData));
}

function isInTempSchedulePeriod() {
  const settings = loadScheduleSettings();
  if (!settings.tempStartDate || !settings.tempEndDate) {
    return false;
  }
  
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const start = new Date(settings.tempStartDate);
  start.setHours(0, 0, 0, 0);
  
  const end = new Date(settings.tempEndDate);
  end.setHours(23, 59, 59, 999);
  
  return today >= start && today <= end;
}

function loadSchedule() {
  const settings = loadScheduleSettings();
  let tempWeekStart = null;
  let tempWeekEnd = null;
  
  if (settings.tempStartDate && settings.tempEndDate) {
    const tempStart = new Date(settings.tempStartDate);
    const tempEnd = new Date(settings.tempEndDate);
    tempWeekStart = getWeekNumberFromDate(tempStart);
    tempWeekEnd = getWeekNumberFromDate(tempEnd);
  }
  
  const isCurrentWeekInTempRange = tempWeekStart !== null && tempWeekEnd !== null 
    && currentWeek >= tempWeekStart && currentWeek <= tempWeekEnd;
  
  const shouldUseTempSchedule = isViewingTempSchedule && isCurrentWeekInTempRange;
  
  const weeklyData = shouldUseTempSchedule ? loadTempWeeklySchedules() : loadWeeklySchedules();
  
  if (weeklyData[currentWeek]) {
    return weeklyData[currentWeek];
  }
  
  const realCurrentWeek = getRealCurrentWeek();
  
  if (currentWeek < realCurrentWeek) {
    return [];
  }
  
  for (let week = currentWeek - 1; week >= 1; week--) {
    if (!isViewingTempSchedule && tempWeekStart !== null && tempWeekEnd !== null) {
      if (week >= tempWeekStart && week <= tempWeekEnd) {
        continue;
      }
    }
    
    const dataToSearch = shouldUseTempSchedule ? loadWeeklySchedules() : weeklyData;
    
    if (dataToSearch[week]) {
      return JSON.parse(JSON.stringify(dataToSearch[week]));
    }
  }
  
  return [];
}

function saveSchedule(data) {
  const settings = loadScheduleSettings();
  let tempWeekStart = null;
  let tempWeekEnd = null;
  
  if (settings.tempStartDate && settings.tempEndDate) {
    const tempStart = new Date(settings.tempStartDate);
    const tempEnd = new Date(settings.tempEndDate);
    tempWeekStart = getWeekNumberFromDate(tempStart);
    tempWeekEnd = getWeekNumberFromDate(tempEnd);
  }
  
  const isCurrentWeekInTempRange = tempWeekStart !== null && tempWeekEnd !== null 
    && currentWeek >= tempWeekStart && currentWeek <= tempWeekEnd;
  
  const shouldUseTempSchedule = isViewingTempSchedule && isCurrentWeekInTempRange;
  
  if (shouldUseTempSchedule) {
    const weeklyData = loadTempWeeklySchedules();
    weeklyData[currentWeek] = data;
    saveTempWeeklySchedules(weeklyData);
  } else {
    const weeklyData = loadWeeklySchedules();
    weeklyData[currentWeek] = data;
    saveWeeklySchedules(weeklyData);
  }
  
  localStorage.setItem('schedule', JSON.stringify(data));
}

function loadCustomIcons() {
  const saved = localStorage.getItem('customIcons');
  return saved ? JSON.parse(saved) : [];
}

function saveCustomIcons(icons) {
  localStorage.setItem('customIcons', JSON.stringify(icons));
}

function loadScheduleSettings() {
  const saved = localStorage.getItem('scheduleSettings');
  return saved ? JSON.parse(saved) : { permanent: false };
}

function saveScheduleSettingsPersist(settings) {
  localStorage.setItem('scheduleSettings', JSON.stringify(settings));
}

function getScheduleList() {
  const saved = localStorage.getItem('scheduleList');
  if (!saved) {
    const list = [{id: 1, name: 'TKB 1', created: new Date().toISOString()}];
    localStorage.setItem('scheduleList', JSON.stringify(list));
    return list;
  }
  const list = JSON.parse(saved);
  return list.sort((a, b) => a.id - b.id);
}

function saveScheduleList(list) {
  localStorage.setItem('scheduleList', JSON.stringify(list));
}

function addNewSchedule() {
  const list = getScheduleList();
  if (list.length >= 5) {
    showConfirmDialog(
      '⚠️ ' + (currentLanguage === 'vi' ? 'Đã đủ số lượng' : 'Maximum reached'),
      currentLanguage === 'vi' ? 'Tối đa 5 thời khóa biểu!' : 'Maximum 5 schedules!',
      () => {},
      false
    );
    return;
  }
  
  const existingIds = list.map(s => s.id).sort((a, b) => a - b);
  let newId = 1;
  
  for (let i = 1; i <= 5; i++) {
    if (!existingIds.includes(i)) {
      newId = i;
      break;
    }
  }
  
  const newSchedule = {
    id: newId,
    name: `TKB ${newId}`,
    created: new Date().toISOString()
  };
  
  list.push(newSchedule);
  list.sort((a, b) => a.id - b.id);
  saveScheduleList(list);
  renderScheduleList();
  
  const addBtn = document.getElementById('addScheduleBtn');
  if (list.length >= 5) {
    addBtn.disabled = true;
    addBtn.style.opacity = '0.5';
    addBtn.style.cursor = 'not-allowed';
    addBtn.textContent = currentLanguage === 'vi' ? '⚠️ Đã đủ 5 TKB' : '⚠️ Maximum 5 schedules';
  }
}

function deleteSchedule(id) {
  const list = getScheduleList();
  
  if (list.length <= 1) {
    showConfirmDialog(
      '⚠️ ' + (currentLanguage === 'vi' ? 'Không thể xóa' : 'Cannot delete'),
      currentLanguage === 'vi' ? 'Phải giữ lại ít nhất 1 TKB!' : 'Must keep at least 1 schedule!',
      () => {},
      false
    );
    return;
  }
  
  if (id === currentScheduleId) {
    showConfirmDialog(
      '⚠️ ' + (currentLanguage === 'vi' ? 'Không thể xóa' : 'Cannot delete'),
      currentLanguage === 'vi' ? 'Không thể xóa TKB đang xem! Vui lòng chuyển sang TKB khác trước.' : 'Cannot delete the current schedule! Please switch to another schedule first.',
      () => {},
      false
    );
    return;
  }
  
  const schedule = list.find(s => s.id === id);
  if (!schedule) return;
  
  let scheduleName = schedule.name;
  if (currentLanguage === 'en') {
    scheduleName = scheduleName.replace(/TKB (\d+)/, 'Schedule $1');
  }
  
  const confirmTitle = currentLanguage === 'vi' ? '🗑️ Xác nhận xóa' : '🗑️ Confirm Delete';
  const confirmMsg = currentLanguage === 'vi' 
    ? `Bạn có chắc muốn xóa ${scheduleName}? Dữ liệu sẽ bị mất vĩnh viễn!`
    : `Are you sure you want to delete ${scheduleName}? All data will be permanently lost!`;
  
  showConfirmDialog(confirmTitle, confirmMsg, () => {
    const newList = list.filter(s => s.id !== id);
    saveScheduleList(newList);
    
    localStorage.removeItem(`weeklySchedules_${id}`);
    localStorage.removeItem(`tempWeeklySchedules_${id}`);
    
    if (document.getElementById('settingsModal').style.display === 'block') {
      renderScheduleList();
    }
    
    render();
    updateScheduleSwitcher();
  }, true);
}

function switchSchedule(id) {
  const list = getScheduleList();
  const schedule = list.find(s => s.id === id);
  
  if (!schedule) {
    console.error('Schedule not found:', id);
    return;
  }
  
  currentScheduleId = id;
  localStorage.setItem('currentScheduleId', id);
  
  exitTempScheduleMode();
  
  if (document.getElementById('settingsModal').style.display === 'block') {
    renderScheduleList();
  }
  
  render();
  updateScheduleSwitcher();
}

function getCurrentSchedule() {
  const list = getScheduleList();
  return list.find(s => s.id === currentScheduleId) || list[0];
}

function resetAllSchedules() {
  const confirmTitle1 = currentLanguage === 'vi' ? '⚠️ Cảnh báo nghiêm trọng' : '⚠️ Critical Warning';
  const confirmMsg1 = currentLanguage === 'vi'
    ? 'Bạn có chắc muốn XÓA TẤT CẢ dữ liệu? Hành động này KHÔNG THỂ HOÀN TÁC!'
    : 'Are you sure you want to DELETE ALL data? This action CANNOT BE UNDONE!';
  
  showConfirmDialog(confirmTitle1, confirmMsg1, () => {
    const confirmTitle2 = currentLanguage === 'vi' ? '🔥 Xác nhận lần cuối' : '🔥 Final Confirmation';
    const confirmMsg2 = currentLanguage === 'vi'
      ? 'Xác nhận lần cuối: Tất cả thời khóa biểu sẽ bị xóa vĩnh viễn!'
      : 'Final confirmation: All schedules will be permanently deleted!';
    
    showConfirmDialog(confirmTitle2, confirmMsg2, () => {
      for (let i = 1; i <= 5; i++) {
        localStorage.removeItem(`weeklySchedules_${i}`);
        localStorage.removeItem(`tempWeeklySchedules_${i}`);
      }
      
      const defaultList = [{id: 1, name: 'TKB 1', created: new Date().toISOString()}];
      saveScheduleList(defaultList);
      
      currentScheduleId = 1;
      localStorage.setItem('currentScheduleId', 1);
      
      exitTempScheduleMode();
      
      if (document.getElementById('settingsModal').style.display === 'block') {
        renderScheduleList();
      }
      
      render();
      updateScheduleSwitcher();
    }, true);
  }, true);
}

function generateScheduleSwitcher() {
  const list = getScheduleList();
  if (list.length <= 1) return '';
  
  let html = '<span class="schedule-switcher">';
  
  const otherSchedules = list
    .filter(schedule => schedule.id !== currentScheduleId)
    .sort((a, b) => a.id - b.id);
  
  otherSchedules.forEach(schedule => {
    let scheduleName = schedule.name;
    if (currentLanguage === 'en') {
      scheduleName = scheduleName.replace(/TKB (\d+)/, 'Schedule $1');
    }
    
    html += `<button class="schedule-btn" onclick="switchSchedule(${schedule.id})">${scheduleName}</button>`;
  });
  
  html += '</span>';
  return html;
}

function updateScheduleSwitcher() {
  const info = document.getElementById('scheduleInfo');
  if (info && info.innerHTML.includes('schedule-switcher')) {
    render();
  }
}

function checkScheduleExpiry() {
  const info = document.getElementById('scheduleInfo');
  const container = document.getElementById('gridContainer');
  const inTempPeriod = isInTempSchedulePeriod();
  const weeklyData = inTempPeriod ? loadTempWeeklySchedules() : loadWeeklySchedules();
  const realWeek = getRealCurrentWeek();
  
  const isCurrentWeek = (currentWeek === realWeek);
  const isCustomizable = currentWeek >= realWeek && currentWeek <= realWeek + 4;
  
  const weekText = currentLanguage === 'vi' ? 'Tuần' : 'Week';
  
  let displayWeek = currentWeek;
  if (currentWeek < 1) {
    const startOfYear = new Date(2026, 0, 5);
    const startDate = new Date(startOfYear);
    startDate.setDate(startDate.getDate() + (currentWeek - 1) * 7);
    const startOf2025 = new Date(2024, 11, 30);
    const diffDays = Math.floor((startDate - startOf2025) / (1000 * 60 * 60 * 24));
    displayWeek = Math.floor(diffDays / 7) + 1;
  }
  
  const currentIndicator = isCurrentWeek 
    ? `<span style="background: #10B981; color: white; padding: 2px 8px; border-radius: 12px; font-size: 0.7rem; margin-left: 8px;">📍 ${currentLanguage === 'vi' ? 'Tuần hiện tại' : 'Current Week'}</span>`
    : '';
  
  const customIndicator = isCustomizable 
    ? `<span style="background: #6366F1; color: white; padding: 2px 8px; border-radius: 12px; font-size: 0.7rem; margin-left: 8px;">✏️ ${currentLanguage === 'vi' ? 'Tùy chỉnh' : 'Customizable'}</span>`
    : '';
  
  const settings = loadScheduleSettings();
  let isInTempWeekRange = false;
  
  if (settings.tempStartDate && settings.tempEndDate) {
    const startOfYear = new Date(2026, 0, 5);
    const tempStart = new Date(settings.tempStartDate);
    const tempEnd = new Date(settings.tempEndDate);
    
    const startWeek = getWeekNumberFromDate(tempStart);
    const endWeek = getWeekNumberFromDate(tempEnd);
    
    isInTempWeekRange = currentWeek >= startWeek && currentWeek <= endWeek;
  }
  
  const tempIndicator = isInTempWeekRange 
    ? `<span class="temp-schedule-indicator" onclick="enterTempScheduleMode()">⏰ ${currentLanguage === 'vi' ? 'TKB Tạm thời' : 'Temp Schedule'}</span>`
    : '';
  
  const scheduleSwitcher = generateScheduleSwitcher();
  
  info.innerHTML = `<span style="color: var(--text-muted);">📅 ${weekText} ${displayWeek}${currentIndicator}${customIndicator}${tempIndicator}${scheduleSwitcher}</span>`;
  
  container.style.display = 'block';
  return true;
}

function updateCurrentScheduleBadge() {
  const badge = document.getElementById('currentScheduleBadge');
  if (!badge) return;
  
  const currentSchedule = getCurrentSchedule();
  if (!currentSchedule) return;
  
  let scheduleName = currentSchedule.name;
  if (currentLanguage === 'en') {
    scheduleName = scheduleName.replace(/TKB (\d+)/, 'Schedule $1');
  }
  
  badge.textContent = scheduleName;
}

function render() {
  if (!checkScheduleExpiry()) return;
  
  updateCurrentScheduleBadge();
  
  const container = document.getElementById('scheduleGrid');
  container.innerHTML = '';
  const data = loadSchedule();
  const days = t('days');
  container.innerHTML += `<div class="grid-header row-label">${t('slot_label')}</div>`;
  for (let d = 2; d <= 7; d++) {
    container.innerHTML += `<div class="grid-header">${days[d]}</div>`;
  }
  for (let s = 0; s < 5; s++) {
    container.innerHTML += `<div class="grid-header row-label">${s + 1}</div>`;
    for (let d = 2; d <= 7; d++) {
      const item = data.find(x => x.day === d && x.slot === s);
      if (item) {
        const iconDisplay = item.iconType === 'custom' 
          ? `<img src="${item.icon}" class="cell-icon" />`
          : `<div class="cell-icon">${item.icon}</div>`;
        container.innerHTML += `
          <div class="cell" 
               data-day="${d}" 
               data-slot="${s}"
               style="background:${item.bg}; color:${item.iconColor};"
               onclick="openEditModal(${d}, ${s})">
            ${iconDisplay}
            <div class="cell-name">${item.name}</div>
            <div class="cell-room">${item.room || ''}</div>
            <button class="cell-edit">✏️</button>
            <div class="tooltip">
              <div class="tooltip-item">
                <strong>${t('subject_label')}</strong> <span>${item.name}</span>
              </div>
              ${item.room ? `<div class="tooltip-item"><strong>${t('room_label')}</strong> <span>${item.room}</span></div>` : ''}
              ${item.teacher ? `<div class="tooltip-item"><strong>${t('teacher_label')}</strong> <span>${item.teacher}</span></div>` : ''}
            </div>
          </div>
        `;
      } else {
        container.innerHTML += `
          <div class="cell empty" onclick="openAddModalForCell(${d}, ${s})">
            <div style="font-size:1.2rem; opacity:.4;">+</div>
          </div>
        `;
      }
    }
  }
}

function initColorPicker() {
  const sbSquare = document.getElementById('sbSquare');
  const sbCursor = document.getElementById('sbCursor');
  const brightSlider = document.getElementById('brightnessSlider');
  const darkSlider = document.getElementById('darknessSlider');
  
  let isDraggingSB = false;
  let baseHue = 120;
  let baseSaturation = 100;
  
  function handleSBMove(e) {
    const rect = sbSquare.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    
    x = Math.max(0, Math.min(x, rect.width));
    y = Math.max(0, Math.min(y, rect.height));
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const dx = x - centerX;
    const dy = y - centerY;
    
    let angle = Math.atan2(dy, dx) * (180 / Math.PI);
    
    if (angle < 0) angle += 360;
    
    angle = (angle + 90) % 360;
    
    baseHue = angle;
    
    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);
    const distanceRatio = Math.min(distance / maxDistance, 1);
    
    baseSaturation = distanceRatio * 100;
    currentHue = baseHue;
    currentSaturation = baseSaturation;
    currentBrightness = 100 - (distanceRatio * 10);
    
    sbCursor.style.left = x + 'px';
    sbCursor.style.top = y + 'px';
    
    const cursorColor = hslToRgb(currentHue, currentSaturation, 50);
    sbCursor.style.borderColor = distanceRatio > 0.3 ? cursorColor : 'white';
    sbCursor.style.backgroundColor = distanceRatio > 0.7 ? cursorColor : 'transparent';
    
    updateColorPreview();
  }
  
  sbSquare.addEventListener('mousedown', e => {
    isDraggingSB = true;
    handleSBMove(e);
    e.preventDefault();
  });
  
  document.addEventListener('mousemove', e => {
    if (isDraggingSB) {
      handleSBMove(e);
    }
  });
  
  document.addEventListener('mouseup', () => {
    isDraggingSB = false;
  });
  
  sbSquare.addEventListener('touchstart', e => {
    isDraggingSB = true;
    const touch = e.touches[0];
    handleSBMove({ clientX: touch.clientX, clientY: touch.clientY });
    e.preventDefault();
  });
  
  sbSquare.addEventListener('touchmove', e => {
    if (isDraggingSB) {
      const touch = e.touches[0];
      handleSBMove({ clientX: touch.clientX, clientY: touch.clientY });
      e.preventDefault();
    }
  });
  
  document.addEventListener('touchend', () => {
    isDraggingSB = false;
  });
  
  brightSlider.addEventListener('input', e => {
    brightnessAdjust = parseFloat(e.target.value);
    updateColorPreview();
  });
  
  darkSlider.addEventListener('input', e => {
    darknessAdjust = parseFloat(e.target.value);
    updateColorPreview();
  });
  
  sbCursor.style.left = '150px';
  sbCursor.style.top = '225px';
  updateColorPreview();
}

function updateColorPreview() {
  const color = getColorFromHSB();
  const preview = document.getElementById('colorPreview');
  const rgbDisplay = document.getElementById('rgbDisplay');
  
  preview.style.background = color.bg;
  
  const rgb = hexToRgb(color.bg);
  rgbDisplay.textContent = `${color.bg.toUpperCase()} • RGB(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  
  const baseColorHex = hslToRgb(currentHue, 100, 50);
  document.documentElement.style.setProperty('--current-color', baseColorHex);
}

function hslToRgb(h, s, l) {
  s = s / 100;
  l = l / 100;
  
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  
  let r = 0, g = 0, b = 0;
  
  if (h >= 0 && h < 60) {
    r = c; g = x; b = 0;
  } else if (h >= 60 && h < 120) {
    r = x; g = c; b = 0;
  } else if (h >= 120 && h < 180) {
    r = 0; g = c; b = x;
  } else if (h >= 180 && h < 240) {
    r = 0; g = x; b = c;
  } else if (h >= 240 && h < 300) {
    r = x; g = 0; b = c;
  } else {
    r = c; g = 0; b = x;
  }
  
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);
  
  return '#' + [r, g, b].map(v => {
    const hex = v.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('');
}

function getColorFromHSB() {
  let h = currentHue;
  let s = currentSaturation / 100;
  let l = 0.5;
  
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  
  let r = 0, g = 0, b = 0;
  
  if (h >= 0 && h < 60) {
    r = c; g = x; b = 0;
  } else if (h >= 60 && h < 120) {
    r = x; g = c; b = 0;
  } else if (h >= 120 && h < 180) {
    r = 0; g = c; b = x;
  } else if (h >= 180 && h < 240) {
    r = 0; g = x; b = c;
  } else if (h >= 240 && h < 300) {
    r = x; g = 0; b = c;
  } else {
    r = c; g = 0; b = x;
  }
  
  r = (r + m) * 255;
  g = (g + m) * 255;
  b = (b + m) * 255;
  
  if (brightnessAdjust > 0) {
    const whiteAmount = brightnessAdjust / 100;
    r = r + (255 - r) * whiteAmount;
    g = g + (255 - g) * whiteAmount;
    b = b + (255 - b) * whiteAmount;
  }
  
  if (darknessAdjust > 0) {
    const blackAmount = darknessAdjust / 100;
    r = r * (1 - blackAmount);
    g = g * (1 - blackAmount);
    b = b * (1 - blackAmount);
  }
  
  r = Math.round(Math.max(0, Math.min(255, r)));
  g = Math.round(Math.max(0, Math.min(255, g)));
  b = Math.round(Math.max(0, Math.min(255, b)));
  
  const bgHex = '#' + [r, g, b].map(v => {
    const hex = v.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('');
  
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  const textColor = luminance > 0.5 ? '#1E293B' : '#F1F5F9';
  
  return { bg: bgHex, text: textColor };
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : { r: 0, g: 0, b: 0 };
}

initColorPicker();

function renderIconGrid() {
  const emojiGrid = document.getElementById('emojiIconGrid');
  const customGrid = document.getElementById('customIconGrid');
  emojiGrid.innerHTML = '';
  customGrid.innerHTML = '';
  if (selectedIconType === 'emoji') {
    DEFAULT_ICONS.forEach((icon, idx) => {
      const isSelected = idx === selectedIconIndex;
      const classes = ['icon-item'];
      if (isSelected) classes.push('selected');
      emojiGrid.insertAdjacentHTML('beforeend',
        `<div class="${classes.join(' ')}" onclick="selectIcon(${idx}, 'emoji')">
           ${icon}
         </div>`
      );
    });
  } else {
    customIcons.forEach((icon, idx) => {
      const isSelected = idx === selectedIconIndex;
      const classes = ['icon-item'];
      if (isSelected) classes.push('selected');
      customGrid.insertAdjacentHTML('beforeend',
        `<div class="${classes.join(' ')}" onclick="selectIcon(${idx}, 'custom')">
           <img src="${icon}" />
         </div>`
      );
    });
  }
}

function selectIcon(idx, type) {
  selectedIconIndex = idx;
  selectedIconType = type;
  renderIconGrid();
}

function switchIconTab(type) {
  document.querySelectorAll('.icon-tab').forEach(t => t.classList.remove('active'));
  event.target.classList.add('active');
  selectedIconType = type;
  selectedIconIndex = 0;
  
  if (type === 'emoji') {
    document.getElementById('emojiIconGrid').style.display = 'grid';
    document.getElementById('customIconArea').style.display = 'none';
  } else {
    document.getElementById('emojiIconGrid').style.display = 'none';
    document.getElementById('customIconArea').style.display = 'block';
  }
  
  renderIconGrid();
}

function uploadCustomIcon(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(ev) {
    customIcons.push(ev.target.result);
    saveCustomIcons(customIcons);
    selectedIconType = 'custom';
    selectedIconIndex = customIcons.length - 1;
    renderIconGrid();
  };
  reader.readAsDataURL(file);
}

const uploadArea = document.getElementById('uploadArea');
uploadArea.addEventListener('dragover', e => {
  e.preventDefault();
  uploadArea.classList.add('dragging');
});
uploadArea.addEventListener('dragleave', () => {
  uploadArea.classList.remove('dragging');
});
uploadArea.addEventListener('drop', e => {
  e.preventDefault();
  uploadArea.classList.remove('dragging');
  const file = e.dataTransfer.files[0];
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = function(ev) {
      customIcons.push(ev.target.result);
      saveCustomIcons(customIcons);
      selectedIconType = 'custom';
      selectedIconIndex = customIcons.length - 1;
      renderIconGrid();
    };
    reader.readAsDataURL(file);
  }
});

function renderDaySelector() {
  const container = document.getElementById('daySelector');
  const days = t('days');
  container.innerHTML = '';
  for (let d = 2; d <= 7; d++) {
    const isSelected = selectedDay === d;
    const classes = ['day-option'];
    if (isSelected) classes.push('selected');
    container.insertAdjacentHTML('beforeend',
      `<div class="${classes.join(' ')}" onclick="selectDay(${d})">
         ${days[d]}
       </div>`
    );
  }
}

function selectDay(day) {
  selectedDay = day;
  renderDaySelector();
  renderSlotSelector();
}

function renderSlotSelector() {
  const container = document.getElementById('slotSelector');
  const data = loadSchedule();
  const daySlots = data.filter(x => x.day === selectedDay && !(editingCell && x.day === editingCell.day && x.slot === editingCell.slot));
  const slots = t('slots');
  
  if (daySlots.length >= 5 && !editingCell) {
    container.innerHTML = `
      <div class="day-full-warning">
        ${t('day_full_warning')}
      </div>
    `;
    return;
  }
  
  const occupiedSlots = daySlots.map(x => x.slot);
  container.innerHTML = '';
  
  slots.forEach((label, idx) => {
    const isOccupied = occupiedSlots.includes(idx);
    const isSelected = selectedSlots.includes(idx);
    const classes = ['slot-option'];
    if (isOccupied) classes.push('disabled');
    if (isSelected && !isOccupied) classes.push('selected');
    
    container.insertAdjacentHTML('beforeend',
      `<div class="${classes.join(' ')}" 
            onclick="${isOccupied ? '' : `toggleSlot(${idx})`}">
         ${label}
       </div>`
    );
  });
}

function toggleSlot(idx) {
  const index = selectedSlots.indexOf(idx);
  if (index > -1) {
    selectedSlots.splice(index, 1);
  } else {
    selectedSlots.push(idx);
  }
  selectedSlots.sort((a, b) => a - b);
  renderSlotSelector();
}

function openAddModal() {
  if (!checkEditPermission()) return;
  
  editingCell = null;
  document.getElementById('modalTitle').innerHTML = `
    <h2>
      <span>${t('add_subject_title')}</span>
      <span class="mode-indicator">${t('add_mode')}</span>
    </h2>
    <button class="btn-close" onclick="closeModal()">×</button>
  `;
  document.getElementById('inputName').value = '';
  document.getElementById('inputRoom').value = '';
  document.getElementById('inputTeacher').value = '';
  document.getElementById('btnDelete').style.display = 'none';
  document.getElementById('daySlotSelectors').style.display = 'block';
  selectedDay = 2;
  selectedSlots = [];
  renderDaySelector();
  renderSlotSelector();
  currentHue = 240;
  currentSaturation = 100;
  currentBrightness = 50;
  brightnessAdjust = 0;
  darknessAdjust = 20;
  document.getElementById('brightnessSlider').value = 0;
  document.getElementById('darknessSlider').value = 20;
  updateColorPreview();
  selectedIconType = 'emoji';
  selectedIconIndex = 0;
  document.getElementById('emojiIconGrid').style.display = 'grid';
  document.getElementById('customIconArea').style.display = 'none';
  document.querySelectorAll('.icon-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.icon-tab')[0].classList.add('active');
  renderIconGrid();
  showModal();
  setTimeout(() => document.getElementById('inputName').focus(), 150);
}

function openAddModalForCell(day, slot) {
  if (!checkEditPermission()) return;
  
  openAddModal();
  selectedDay = day;
  selectedSlots = [slot];
  renderDaySelector();
  renderSlotSelector();
}

function openEditModal(day, slot) {
  if (!checkEditPermission()) return;
  
  const data = loadSchedule();
  const item = data.find(x => x.day === day && x.slot === slot);
  if (!item) return;
  editingCell = { day, slot };
  document.getElementById('modalTitle').innerHTML = `
    <h2>
      <span>${t('edit_subject_title')}</span>
      <span class="mode-indicator" style="background:#FEF3C7;color:#F59E0B;">${t('edit_mode')}</span>
    </h2>
    <button class="btn-close" onclick="closeModal()">×</button>
  `;
  document.getElementById('inputName').value = item.name;
  document.getElementById('inputRoom').value = item.room || '';
  document.getElementById('inputTeacher').value = item.teacher || '';
  document.getElementById('btnDelete').style.display = 'block';
  document.getElementById('daySlotSelectors').style.display = 'none';
  selectedDay = day;
  selectedSlot = slot;
  currentHue = 240;
  currentSaturation = 100;
  currentBrightness = 50;
  brightnessAdjust = 0;
  darknessAdjust = 20;
  updateColorPreview();
  if (item.iconType === 'custom') {
    const idx = customIcons.indexOf(item.icon);
    selectIcon(idx >= 0 ? idx : 0, 'custom');
    selectedIconType = 'custom';
    document.getElementById('emojiIconGrid').style.display = 'none';
    document.getElementById('customIconArea').style.display = 'block';
    document.querySelectorAll('.icon-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.icon-tab')[1].classList.add('active');
  } else {
    const idx = DEFAULT_ICONS.indexOf(item.icon);
    selectIcon(idx >= 0 ? idx : 0, 'emoji');
    selectedIconType = 'emoji';
    document.getElementById('emojiIconGrid').style.display = 'grid';
    document.getElementById('customIconArea').style.display = 'none';
    document.querySelectorAll('.icon-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.icon-tab')[0].classList.add('active');
  }
  renderIconGrid();
  showModal();
  setTimeout(() => document.getElementById('inputName').focus(), 150);
}

function saveSubject() {
  const name = document.getElementById('inputName').value.trim();
  const room = document.getElementById('inputRoom').value.trim();
  const teacher = document.getElementById('inputTeacher').value.trim();
  const saveBtn = document.getElementById('btnSave');
  
  if (!name) {
    document.getElementById('inputName').style.borderColor = '#E53E3E';
    showButtonFailure(saveBtn, currentLanguage === 'vi' ? 'Thất bại!' : 'Failed!');
    return;
  }
  document.getElementById('inputName').style.borderColor = '';
  
  if (!editingCell && selectedSlots.length === 0) {
    showConfirmDialog(
      '⚠️ ' + (currentLanguage === 'vi' ? 'Thiếu thông tin' : 'Missing Info'),
      currentLanguage === 'vi' ? 'Vui lòng chọn ít nhất 1 tiết!' : 'Please select at least 1 slot!',
      () => {},
      false
    );
    showButtonFailure(saveBtn, currentLanguage === 'vi' ? 'Thất bại!' : 'Failed!');
    return;
  }
  
  const color = getColorFromHSB();
  const icon = selectedIconType === 'custom' 
    ? customIcons[selectedIconIndex]
    : DEFAULT_ICONS[selectedIconIndex];
  
  let data = loadSchedule();
  
  if (editingCell) {
    data = data.filter(x => !(x.day === editingCell.day && x.slot === editingCell.slot));
    data.push({
      day: editingCell.day,
      slot: editingCell.slot,
      name,
      room,
      teacher,
      bg: color.bg,
      icon: icon,
      iconType: selectedIconType,
      iconColor: color.text
    });
  } else {
    selectedSlots.forEach(slot => {
      data = data.filter(x => !(x.day === selectedDay && x.slot === slot));
      data.push({
        day: selectedDay,
        slot: slot,
        name,
        room,
        teacher,
        bg: color.bg,
        icon: icon,
        iconType: selectedIconType,
        iconColor: color.text
      });
    });
  }
  
  saveSchedule(data);
  
  showButtonSuccess(saveBtn, currentLanguage === 'vi' ? 'Đã lưu!' : 'Saved!');
  
  setTimeout(() => {
    closeModal();
    render();
    
    setTimeout(() => {
      if (editingCell) {
        const cell = document.querySelector(`.cell[data-day="${editingCell.day}"][data-slot="${editingCell.slot}"]`);
        if (cell) {
          cell.classList.add('just-updated');
          setTimeout(() => cell.classList.remove('just-updated'), 600);
        }
      } else {
        selectedSlots.forEach(slot => {
          const cell = document.querySelector(`.cell[data-day="${selectedDay}"][data-slot="${slot}"]`);
          if (cell) {
            cell.classList.add('just-updated');
            setTimeout(() => cell.classList.remove('just-updated'), 600);
          }
        });
      }
    }, 100);
    
    const originalText = saveBtn.getAttribute('data-original-text');
    const originalClass = saveBtn.getAttribute('data-original-class');
    saveBtn.className = originalClass;
    saveBtn.innerHTML = originalText;
    saveBtn.disabled = false;
  }, 800);
}

function showButtonSuccess(btn, message) {
  if (!btn.hasAttribute('data-original-text')) {
    btn.setAttribute('data-original-text', btn.innerHTML);
    btn.setAttribute('data-original-class', btn.className);
  }
  
  btn.className = 'btn btn-success';
  btn.innerHTML = '✅ ' + message;
  btn.disabled = true;
}

function showButtonFailure(btn, message) {
  if (!btn.hasAttribute('data-original-text')) {
    btn.setAttribute('data-original-text', btn.innerHTML);
    btn.setAttribute('data-original-class', btn.className);
  }
  
  const originalText = btn.getAttribute('data-original-text');
  const originalClass = btn.getAttribute('data-original-class');
  
  btn.className = 'btn btn-danger';
  btn.innerHTML = '❌ ' + message;
  btn.disabled = true;
  
  setTimeout(() => {
    btn.className = originalClass;
    btn.innerHTML = originalText;
    btn.disabled = false;
  }, 2000);
}

function deleteCurrentSubject() {
  if (!editingCell) return;
  
  const confirmTitle = currentLanguage === 'vi' ? '🗑️ Xác nhận xóa' : '🗑️ Confirm Delete';
  const confirmMsg = currentLanguage === 'vi' 
    ? 'Bạn có chắc muốn xóa môn học này?'
    : 'Are you sure you want to delete this subject?';
  
  showConfirmDialog(confirmTitle, confirmMsg, () => {
    let data = loadSchedule();
    data = data.filter(x => !(x.day === editingCell.day && x.slot === editingCell.slot));
    saveSchedule(data);
    closeModal();
    render();
  }, true);
}

function showModal() {
  const overlay = document.getElementById('overlay');
  const modal = document.getElementById('modal');
  overlay.classList.remove('closing');
  modal.classList.remove('closing');
  overlay.style.display = 'block';
  modal.style.display = 'block';
  customIcons = loadCustomIcons();
}

function closeModal() {
  const overlay = document.getElementById('overlay');
  const modal = document.getElementById('modal');
  overlay.classList.add('closing');
  modal.classList.add('closing');
  setTimeout(() => {
    overlay.style.display = 'none';
    modal.style.display = 'none';
    overlay.classList.remove('closing');
    modal.classList.remove('closing');
  }, 300);
}

function showConfirmDialog(title, message, onConfirm, isDanger = true) {
  const overlay = document.getElementById('confirmOverlay');
  const dialog = document.getElementById('confirmDialog');
  const titleEl = document.getElementById('confirmTitle');
  const messageEl = document.getElementById('confirmMessage');
  const okBtn = document.getElementById('confirmOkBtn');
  const cancelBtn = document.getElementById('confirmCancelBtn');
  
  titleEl.innerHTML = title;
  messageEl.textContent = message;
  
  okBtn.className = isDanger ? 'btn btn-danger' : 'btn btn-success';
  okBtn.textContent = currentLanguage === 'vi' ? (isDanger ? 'Xóa' : 'OK') : (isDanger ? 'Delete' : 'OK');
  cancelBtn.textContent = currentLanguage === 'vi' ? 'Hủy' : 'Cancel';
  
  const newOkBtn = okBtn.cloneNode(true);
  okBtn.parentNode.replaceChild(newOkBtn, okBtn);
  
  newOkBtn.onclick = () => {
    onConfirm();
    closeConfirmDialog();
  };
  
  overlay.style.display = 'block';
  dialog.classList.add('show');
}

function closeConfirmDialog() {
  const overlay = document.getElementById('confirmOverlay');
  const dialog = document.getElementById('confirmDialog');
  
  overlay.style.display = 'none';
  dialog.classList.remove('show');
}

function openScheduleSettingsModal() {
  const settings = loadScheduleSettings();
  const tempStartInput = document.getElementById('tempStartDate');
  const tempEndInput = document.getElementById('tempEndDate');
  const langSelect = document.getElementById('languageSelect');
  
  if (settings.tempStartDate) tempStartInput.value = settings.tempStartDate;
  if (settings.tempEndDate) tempEndInput.value = settings.tempEndDate;
  langSelect.value = currentLanguage;
  
  tempSelectedLanguage = null;
  
  renderScheduleList();
  
  const list = getScheduleList();
  const addBtn = document.getElementById('addScheduleBtn');
  if (list.length >= 5) {
    addBtn.disabled = true;
    addBtn.style.opacity = '0.5';
    addBtn.style.cursor = 'not-allowed';
    addBtn.textContent = currentLanguage === 'vi' ? '⚠️ Đã đủ 5 TKB' : '⚠️ Maximum 5 schedules';
  } else {
    addBtn.disabled = false;
    addBtn.style.opacity = '1';
    addBtn.style.cursor = 'pointer';
    addBtn.textContent = currentLanguage === 'vi' ? '➕ Thêm Thời khóa biểu mới' : '➕ Add new schedule';
  }
  
  document.getElementById('overlay').style.display = 'block';
  document.getElementById('settingsModal').style.display = 'block';
}

function renderScheduleList() {
  const container = document.getElementById('scheduleListContainer');
  const list = getScheduleList();
  
  if (list.length === 0) {
    container.innerHTML = `<p style="color: var(--text-muted); font-size: 0.85rem;">${currentLanguage === 'vi' ? 'Chưa có TKB nào' : 'No schedules yet'}</p>`;
    return;
  }
  
  let html = '<div style="display: flex; flex-direction: column; gap: 8px;">';
  
  list.forEach(schedule => {
    const isCurrent = schedule.id === currentScheduleId;
    const canDelete = !isCurrent && list.length > 1;
    
    let scheduleName = schedule.name;
    if (currentLanguage === 'en') {
      scheduleName = scheduleName.replace(/TKB (\d+)/, 'Schedule $1');
    }
    
    html += `
      <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px; background: var(--primary-light); border-radius: 8px; ${isCurrent ? 'border: 2px solid var(--primary);' : ''}">
        <div>
          <strong style="color: var(--text);">${scheduleName}</strong>
          ${isCurrent ? `<span style="color: var(--primary); font-size: 0.75rem; margin-left: 6px;">● ${currentLanguage === 'vi' ? 'Đang xem' : 'Viewing'}</span>` : ''}
        </div>
        <div style="display: flex; gap: 6px;">
          ${!isCurrent ? `<button class="btn btn-ghost" style="padding: 4px 10px; font-size: 0.75rem;" onclick="switchSchedule(${schedule.id})">${currentLanguage === 'vi' ? 'Chuyển' : 'Switch'}</button>` : ''}
          ${canDelete ? `<button class="btn btn-danger" style="padding: 4px 10px; font-size: 0.75rem;" onclick="deleteSchedule(${schedule.id})">${currentLanguage === 'vi' ? 'Xóa' : 'Delete'}</button>` : ''}
        </div>
      </div>
    `;
  });
  
  html += '</div>';
  container.innerHTML = html;
  
  const addBtn = document.getElementById('addScheduleBtn');
  if (addBtn) {
    if (list.length >= 5) {
      addBtn.disabled = true;
      addBtn.style.opacity = '0.5';
      addBtn.style.cursor = 'not-allowed';
      addBtn.textContent = currentLanguage === 'vi' ? '⚠️ Đã đủ 5 TKB' : '⚠️ Maximum 5 schedules';
    } else {
      addBtn.disabled = false;
      addBtn.style.opacity = '1';
      addBtn.style.cursor = 'pointer';
      addBtn.textContent = currentLanguage === 'vi' ? '➕ Thêm Thời khóa biểu mới' : '➕ Add new schedule';
    }
  }
}

function closeSettingsModal() {
  tempSelectedLanguage = null;
  
  const langSelect = document.getElementById('languageSelect');
  if (langSelect) {
    langSelect.value = currentLanguage;
  }
  
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('settingsModal').style.display = 'none';
}

function saveScheduleSettings() {
  const saveBtn = document.getElementById('saveSettingsBtn');
  const settings = {
    tempStartDate: document.getElementById('tempStartDate').value,
    tempEndDate: document.getElementById('tempEndDate').value
  };
  
  if (settings.tempStartDate && settings.tempEndDate) {
    const tempStart = new Date(settings.tempStartDate);
    const tempEnd = new Date(settings.tempEndDate);
    if (tempStart > tempEnd) {
      const msg = currentLanguage === 'vi' 
        ? 'Ngày bắt đầu TKB tạm thời phải trước ngày kết thúc!'
        : 'Temporary schedule start date must be before end date!';
      showConfirmDialog(
        '⚠️ ' + (currentLanguage === 'vi' ? 'Lỗi' : 'Error'),
        msg,
        () => {},
        false
      );
      showButtonFailure(saveBtn, currentLanguage === 'vi' ? 'Thất bại!' : 'Failed!');
      return;
    }
  }
  
  saveScheduleSettingsPersist(settings);
  
  if (tempSelectedLanguage && tempSelectedLanguage !== currentLanguage) {
    applyLanguageChange(tempSelectedLanguage);
    tempSelectedLanguage = null;
  }
  
  render();
  
  showButtonSuccess(saveBtn, currentLanguage === 'vi' ? 'Thành công!' : 'Success!');
  
  setTimeout(() => {
    const originalText = saveBtn.getAttribute('data-original-text');
    const originalClass = saveBtn.getAttribute('data-original-class');
    saveBtn.className = originalClass;
    saveBtn.innerHTML = originalText;
    saveBtn.disabled = false;
    closeSettingsModal();
  }, 1500);
}

function enterTempScheduleMode() {
  isViewingTempSchedule = true;
  document.getElementById('exitTempBtn').style.display = 'inline-flex';
  document.body.style.borderTop = '4px solid #F59E0B';
  
  const settings = loadScheduleSettings();
  if (settings.tempStartDate) {
    const tempStart = new Date(settings.tempStartDate);
    currentWeek = getWeekNumberFromDate(tempStart);
  }
  
  render();
}

function exitTempScheduleMode() {
  isViewingTempSchedule = false;
  document.getElementById('exitTempBtn').style.display = 'none';
  document.body.style.borderTop = 'none';
  
  currentWeek = getRealCurrentWeek();
  
  render();
}

function getWeekNumberFromDate(date) {
  const startOfYear = new Date(2026, 0, 5);
  const diffTime = date - startOfYear;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return Math.floor(diffDays / 7) + 1;
}

function toggleDarkMode() {
  const body = document.body;
  const btn = document.getElementById('toggleDark');
  if (body.dataset.theme === 'dark') {
    delete body.dataset.theme;
    btn.classList.remove('active');
    localStorage.removeItem('theme');
  } else {
    body.dataset.theme = 'dark';
    btn.classList.add('active');
    localStorage.setItem('theme', 'dark');
  }
}

if (localStorage.getItem('theme') === 'dark') {
  document.body.dataset.theme = 'dark';
  document.getElementById('toggleDark').classList.add('active');
}

function changeWeek(dir) {
  if (isViewingTempSchedule) {
    const settings = loadScheduleSettings();
    if (settings.tempStartDate && settings.tempEndDate) {
      const tempStart = new Date(settings.tempStartDate);
      const tempEnd = new Date(settings.tempEndDate);
      const tempWeekStart = getWeekNumberFromDate(tempStart);
      const tempWeekEnd = getWeekNumberFromDate(tempEnd);
      
      currentWeek += dir;
      
      if (currentWeek < tempWeekStart) currentWeek = tempWeekStart;
      if (currentWeek > tempWeekEnd) currentWeek = tempWeekEnd;
    }
  } else {
    currentWeek += dir;
    if (currentWeek > 52) currentWeek = 52;
  }
  
  updateWeekDisplay();
  render();
}

function updateWeekDisplay() {
  const display = document.getElementById('weekDisplay');
  if (!display) {
    console.error('weekDisplay element not found!');
    return;
  }
  
  const today = new Date();
  const startOfYear = new Date(2026, 0, 5);
  const startDate = new Date(startOfYear);
  startDate.setDate(startDate.getDate() + (currentWeek - 1) * 7);
  
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + 5);
  
  const formatDate = (d) => {
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };
  
  display.style.opacity = '0';
  display.style.transform = 'scale(0.95)';
  
  setTimeout(() => {
    display.textContent = `${formatDate(startDate)} - ${formatDate(endDate)}`;
    
    display.style.transition = 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
    display.style.opacity = '1';
    display.style.transform = 'scale(1)';
  }, 150);
  
  if (isViewingTempSchedule) {
    const settings = loadScheduleSettings();
    if (settings.tempStartDate && settings.tempEndDate) {
      const tempStart = new Date(settings.tempStartDate);
      const tempEnd = new Date(settings.tempEndDate);
      const tempWeekStart = getWeekNumberFromDate(tempStart);
      const tempWeekEnd = getWeekNumberFromDate(tempEnd);
      
      const prevBtn = document.getElementById('prevBtn');
      const nextBtn = document.getElementById('nextBtn');
      
      if (prevBtn) {
        if (currentWeek <= tempWeekStart) {
          prevBtn.style.display = 'none';
        } else {
          prevBtn.style.display = 'inline-block';
        }
      }
      
      if (nextBtn) {
        if (currentWeek >= tempWeekEnd) {
          nextBtn.style.display = 'none';
        } else {
          nextBtn.style.display = 'inline-block';
        }
      }
    }
  } else {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    if (prevBtn) prevBtn.style.display = 'inline-block';
    if (nextBtn) nextBtn.style.display = 'inline-block';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  currentLanguage = loadLanguage();
  if (document.getElementById('languageSelect')) {
    document.getElementById('languageSelect').value = currentLanguage;
  }
  updateAllText();
  
  const savedScheduleId = localStorage.getItem('currentScheduleId');
  if (savedScheduleId) {
    const parsedId = parseInt(savedScheduleId);
    const list = getScheduleList();
    const scheduleExists = list.some(s => s.id === parsedId);
    if (scheduleExists) {
      currentScheduleId = parsedId;
    } else {
      currentScheduleId = list[0].id;
      localStorage.setItem('currentScheduleId', currentScheduleId);
    }
  } else {
    const list = getScheduleList();
    currentScheduleId = list[0].id;
  }
  
  getScheduleList();
  
  currentWeek = getRealCurrentWeek();
  
  updateWeekDisplay();
  render();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
    closeSettingsModal();
    closeConfirmDialog();
  }
});
