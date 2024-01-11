import repairService from '../service/RepairService';
import { reduce } from 'rxjs/operators';

class RepairController {

  addRepair(repair) {
    return repairService.addRepair(repair);
  }

  getRepair(id) {
    return repairService.getRepair(id);
  }

  getRepairs() {
    return repairService.getRepairs();
  }

  removeRepair(id) {
    return repairService.removeRepair(id);
  }

  getTotalTodoTime() {
    return repairService.getRepairs().pipe(
      reduce((total, repair) => total + repair.estimatedTime, 0)
    );
  }
}

const repairController = new RepairController();

export default repairController;