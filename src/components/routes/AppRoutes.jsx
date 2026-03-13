import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Introduction from '../pages/Introduction';
import DeanMessage from '../pages/DeanMessage';
import DirectorMessage from '../pages/DirectorMessage';
import PrincipalMessage from '../pages/PrincipalMessage';
import VCMessage from '../pages/VCMessage';
import Courses from '../pages/Courses';
import Affiliation from '../pages/Affiliation';
import Egilibility from '../pages/Eligibility';
import Document from '../pages/Document';
import AcademicCalendar from '../pages/AcademicCalendar';
import Syllabus from '../pages/Syllabus';
import FacultyPage from '../pages/FacultyPage';
import AttendenceProgress from '../pages/AttendenceProgress';
import ClassRooms from '../pages/ClassRooms';
import Laboratories from '../pages/Laboratories';
import HerbalGarden from '../pages/HerbalGarden';
import Projects from '../pages/Projects';
import Publications from '../pages/Publications';
import AntiRagging from '../pages/AntiRagging';
import Grievance from '../pages/Grievance';
import Discrimination from '../pages/Discrimination';
import Gender from '../pages/Gender';
import Students from '../pages/StudentsAchievements';
import FacultyMembers from '../pages/FacultyMemberAchievements';
import Curricular from '../pages/Curricular';
import CoCurricular from '../pages/CoCurricular';
import ExtraCurricular from '../pages/ExtraCurricular';
import Gallery from '../pages/Gallery';
import ImportantLinks from '../pages/ImportantLinks';
import Contact from '../pages/Contact';
import ViewAllNotifications from '../pages/ViewAllNotifications';
import ViewAllFacilities from '../pages/ViewAllFacilities';


const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/about/introduction' element={<Introduction/>}/>
    <Route path='/about/vc-message' element={<VCMessage/>}/>
    <Route path='/about/deam-message' element={<DeanMessage/>}/>
    <Route path='/about/director-message' element={<DirectorMessage/>}/>
    <Route path='/about/principal-message' element={<PrincipalMessage/>}/>
    <Route path='/admission/programs' element={<Courses/>}/>
    <Route path='/admission/affiliation-approvals' element={<Affiliation/>}/>
    <Route path='/admission/eligibility' element={<Egilibility/>}/>
    <Route path='/admission/documents' element={<Document/>}/>
    <Route path='/academics/faculty-members' element={<FacultyPage/>}/>
    <Route path='/academics/academic-calendar' element={<AcademicCalendar/>}/>
    <Route path='/academics/syllabus' element={<Syllabus/>}/>
    <Route path='/academics/attendence-progress' element={<AttendenceProgress/>}/>
    <Route path='/facilities/class-rooms' element={<ClassRooms/>}/>
    <Route path='/facilities/laboratories' element={<Laboratories/>}/>
    <Route path='/facilities/herbal-garden' element={<HerbalGarden/>}/>
    <Route path='/research/projects' element={<Projects/>}/>
    <Route path='/research/publications' element={<Publications/>}/>
    <Route path='/committee/antiragging-committee' element={<AntiRagging/>}/>
    <Route path='/committee/grievance-committee' element={<Grievance/>}/>
    <Route path='/committee/anti-discrimination-committee' element={<Discrimination/>}/>
    <Route path='/committee/gender-sensitization-committee' element={<Gender/>}/>
    <Route path='/achievements/students' element={<Students/>}/>
    <Route path='/achievements/faculty-members' element={<FacultyMembers/>}/>
    <Route path='/events/curricular' element={<Curricular/>}/>
    <Route path='/events/co-curricular' element={<CoCurricular/>}/>
    <Route path='/events/extra-curricular' element={<ExtraCurricular/>}/>
    <Route path='/gallery' element={<Gallery/>}/>
    <Route path='/important-links' element={<ImportantLinks/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/viewallnotifications' element={<ViewAllNotifications/>}/>
    <Route path='/viewallfacilities' element={<ViewAllFacilities/>}/> 
  </Routes>
)

export default AppRoutes