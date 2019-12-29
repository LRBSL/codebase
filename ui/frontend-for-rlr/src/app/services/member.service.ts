import { Injectable } from '@angular/core';
import { HttpRequestResolverService } from './http-request-resolver.service';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private httpService: HttpRequestResolverService) { }

  searchMembersByIdOrNIC(id_or_nic: string) {
    return this.httpService.realizarHttpPost('/api/getMemberDetails', { id_or_nic: id_or_nic });
  }
}
