import { Component , OnInit} from '@angular/core';
import { SystemGlobalVariablesService } from 'src/app/services/system-global-variables.service';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

   public appTitle: String = "";

  constructor(private systemGLobalVariablesService: SystemGlobalVariablesService){
    this.appTitle = this.systemGLobalVariablesService.getAppTitle();
   }

   ngOnInit(): void {
     
   }

}
