import { Component, signal,OnInit } from '@angular/core';
import { Package } from '../../models/package';
import { GroupPackages } from '../../models/group-packages';
import { Router } from '@angular/router';
import { PackagesService } from '../packages-service';


const AllGroups: GroupPackages[] = [
    
  { label: 'Core Dashboard', packages: [{ id: 4, name: 'Dashboard' }]},
  { label: 'MainMenu Core', packages: [
    { id: 1, name: 'Main Menu' }, { id: 3, name: 'Appointments' },
    { id: 6, name: 'In Patients' }, { id: 8, name: 'All Patients' },
    { id: 10, name: 'Admissions' }, { id: 11, name: 'Tenant Management' }
  ]},
  { label: 'MainMenu ICU', packages: [
    { id: 1, name: 'Main Menu' }, { id: 7, name: 'In Patients ICU' },
    { id: 8, name: 'All Patients' }, { id: 10, name: 'Admissions' },
    { id: 11, name: 'Tenant Management' }
  ]},
  { label: 'Clinical Monitoring', packages: [
    { id: 19, name: 'Daily Monitoring' }, { id: 20, name: 'Vital Signs' },
    { id: 21, name: 'Arterial Blood Gas' }, { id: 22, name: 'Glasgow' },
    { id: 23, name: 'Glucose' }, { id: 24, name: 'Nutrition Intake' }
  ]},
  { label: 'Ips Profile', packages: [
    { id: 16, name: 'In Patients Profile' }, { id: 17, name: 'All Patients Profile' },
    { id: 18, name: 'Episode Of Care Profile' }, { id: 25, name: 'Alerts' },
    { id: 27, name: 'Allergies' }, { id: 26, name: 'Medical Alert' },
    { id: 29, name: 'Somatometrics' }, { id: 31, name: 'Neck Circumference' },
    { id: 30, name: 'Weight' }, { id: 32, name: 'Medical History' },
    { id: 33, name: 'Medical' }, { id: 34, name: 'Vaccinations' },
    { id: 35, name: 'Resolved Problems' }, { id: 36, name: 'Medical Problems' },
    { id: 37, name: 'Current Problems' }, { id: 38, name: 'Device and Implants' },
    { id: 39, name: 'Procedures' }, { id: 40, name: 'Medication Summary' },
    { id: 41, name: 'Current Medicines' }, { id: 42, name: 'Past Medicines' },
    { id: 43, name: 'Social History' }, { id: 44, name: 'Travel History' },
    { id: 60, name: 'Health Care Plan' }, { id: 61, name: 'Care Plan Interventions' },
    { id: 62, name: 'Care Plan Files' }, { id: 63, name: 'Episode Of Care' },
    { id: 64, name: 'Self Report' }
  ]},
  { label: 'Gynaecology Suite', packages: [
    { id: 45, name: 'Gynaecology' }, { id: 46, name: 'Pregnancy' },
    { id: 47, name: 'Pregnancy History' }, { id: 48, name: 'Pregnancy Status' },
    { id: 49, name: 'Pregnancy Outcome' }, { id: 50, name: 'Hysteroscopy' }
  ]},
  { label: 'Gynaecology Suite Basic', packages: [
    { id: 45, name: 'Gynaecology' }, { id: 46, name: 'Pregnancy' },
    { id: 47, name: 'Pregnancy History' }, { id: 48, name: 'Pregnancy Status' },
    { id: 49, name: 'Pregnancy Outcome' }
  ]},
  { label: 'Laboratory and Imaging', packages: [
    { id: 51, name: 'Laboratory' }, { id: 53, name: 'Laboratory Files' },
    { id: 52, name: 'Laboratory Results' }, { id: 54, name: 'Imaging' },
    { id: 55, name: 'Imaging Files' }, { id: 57, name: 'Multiple Sclerosis Segmentation' },
    { id: 58, name: 'Precious MedSam Segmentation' }, { id: 59, name: 'Protect MedSam Segmentation' }
  ]},
  { label: 'Laboratory and Imaging Basic', packages: [
    { id: 51, name: 'Laboratory' }, { id: 53, name: 'Laboratory Files' },
    { id: 52, name: 'Laboratory Results' }, { id: 54, name: 'Imaging' },
    { id: 55, name: 'Imaging Files' }
  ]},
  { label: 'Initial Assessments', packages: [{ id: 66, name: 'Initial Assessments' }]},
  { label: 'Departmental Questionnaires', packages: [
    { id: 72, name: 'Departmental Questionnaires' }, { id: 82, name: 'Speech Therapy' },
    { id: 83, name: 'Geriatric Depression Scale' }, { id: 84, name: 'Parkinsons Questionnaire' },
    { id: 85, name: 'Becks Depression Inventory' }, { id: 86, name: 'Oral Clinical Assessment Of Deposition' },
    { id: 74, name: 'Physiotherapy' }, { id: 75, name: 'Berg Balance Scale' },
    { id: 76, name: 'Patient Assessment Card' }, { id: 77, name: 'SLDC Questionnaire' },
    { id: 78, name: 'SLAG Questionnaire' }
  ]},
  { label: 'Precious Modules', packages: [
    { id: 1, name: 'Main Menu' }, { id: 9, name: 'All Patients Pilot Study' },
    { id: 11, name: 'Tenant Management' }, { id: 94, name: 'Pilot Study Profile' },
    { id: 95, name: 'Pilot Study' }, { id: 96, name: 'Precious AI' },
    { id: 97, name: 'Assessment' }, { id: 20, name: 'Vital Signs' },
    { id: 21, name: 'Arterial Blood Gas' }, { id: 22, name: 'Glasgow' },
    { id: 98, name: 'Capnography' }, { id: 99, name: 'Complication' },
    { id: 100, name: 'Patient Characteristics' }, { id: 43, name: 'Social History' },
    { id: 101, name: 'Comorbidity' }, { id: 102, name: 'Etiology' },
    { id: 51, name: 'Laboratory' }, { id: 53, name: 'Laboratory Files' },
    { id: 52, name: 'Laboratory Results' }, { id: 103, name: 'Tube Characteristics' },
    { id: 54, name: 'Imaging' }, { id: 55, name: 'Imaging Files' },
    { id: 56, name: 'CT Parameters' }, { id: 57, name: 'Multiple Sclerosis Segmentation' },
    { id: 58, name: 'Precious MedSam Segmentation' }
  ]},
  { label: 'Workspace', packages: [
    { id: 2, name: 'Workspace' }, { id: 91, name: 'My Patients' },
    { id: 92, name: 'Incoming Referrals' }, { id: 93, name: 'Outgoing Referrals' }
  ]},
  { label: 'Tenant Administration', packages: [
    { id: 11, name: 'Tenant Management' }, { id: 12, name: 'User Management' },
    { id: 13, name: 'Care Team Templates' }
  ]},
  { label: 'AMEN Specialized', packages: [
    { id: 5, name: 'Dashboard AMEN' }, { id: 67, name: 'Social Questionnaire' },
    { id: 68, name: 'Supporting Documents' }, { id: 69, name: 'Fast Protocol' },
    { id: 70, name: 'NIH Stroke Score' }
  ]},
  { label: 'IPS Sync', packages: [
    { id: 65, name: 'CDA Reader / IPS Data' }, { id: 14, name: 'IPS HealthSync' }
  ]},
  { label: 'Connectathon', packages: [{ id: 15, name: 'PDQ' }]}
]; 

@Component({
  selector: 'app-packages',
  standalone: false,
  templateUrl: './packages.html',
  styleUrl: './packages.css',
})
export class Packages implements OnInit {

  groups = signal<GroupPackages[]>([]);

  selectedPackagesAll: { [label: string]: Package[] } = {};


constructor(private router: Router, private packageService: PackagesService) {}
  ngOnInit() {
    this.groups.set(AllGroups);

    AllGroups.forEach(group => {
      this.selectedPackagesAll[group.label] = [];
    });

    
const isSelEmpty = this.packageService.isSelEmpty();
console.log(isSelEmpty);
     let SelectedPackages= this.packageService.getSelPacks();

    if(SelectedPackages!=null){
     console.log('Saved packages from service:', SelectedPackages); // Check 1: is service returning anything?

 if (SelectedPackages && SelectedPackages.length > 0) {
    AllGroups.forEach(group => {
      this.selectedPackagesAll[group.label] = group.packages.filter(pack =>
        SelectedPackages.some(selected => selected.id === pack.id)
      );
    });
  }
    }
  console.log('Final selectedPackagesAll:', this.selectedPackagesAll); // Check 3: is the object populated?
  }


getAllSelected(): Package[] {

  
  const all = Object.values(this.selectedPackagesAll).flat(); //piannoume ola ta selected packages kai me to flat mpenoun se ena array

  // epidi kapoias ids einai ta idia ta afairoume apo ola
  return all.filter((pack, index, all) =>
//gia kathe stixio vlepo poy ksanaiparxei GIA PROTI FORA kai an einai diaforetiko index tote einai duplicate kai to kanoume discard me to filter diaforetika einai 1 and we are keeping it
    index === all.findIndex(p => p.id === pack.id) 

  );
}

  next() {
   const selected=this.getAllSelected();

   console.log(selected)
this.packageService.addSPacks(selected)
console.log(this.packageService.getSelPacks())
    this.router.navigate(['/facilities']);
  }

  back() {
const selected=this.getAllSelected();
this.packageService.addSPacks(selected)
    this.router.navigate(['/admin']);
  }
}

