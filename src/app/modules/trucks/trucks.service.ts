import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api } from 'src/config/api';
import { DateTransformService } from 'src/app/shared/services/date-transform.service';

@Injectable({
  providedIn: 'root'
})
export class TrucksService {

  constructor(private http: HttpClient, private dateTransformService: DateTransformService) { }

  getTrucks(params = {}) {
    const url = api.TRUCKS_LIST;
    return this.http.get<any[]>(url, { params });
  }

  searchTrucks(query, field) {
    const filters = {};
    filters[field] = query;

    const url = api.TRUCKS_LIST;
    return this.http.get<any[]>(url, { params: filters });
  }

  flattenObjectRows(data) {
    data['rows'].forEach(truck => {
      truck['truckId'] = truck['id'];
      truck['id'] = truck['user']['id'];
      truck['photo'] = (truck['profileImage']) ? api.mediaPath + truck['profileImage']['path'] : 'assets/images/users/default-profile.svg';
      truck['approved'] = truck['user']['approved'];
      truck['email'] = truck['user']['email'];
      truck['telephone'] = truck['user']['telephone'];
      truck['createdAt'] = this.dateTransformService.transformDate(truck['createdAt']);
    });
    return data;
  }

}
