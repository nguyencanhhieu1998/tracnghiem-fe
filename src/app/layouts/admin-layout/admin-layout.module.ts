import { AnswerTestComponent } from './../../subject/answer-test/answer-test.component';
import { TestAdminComponent } from './../../test-admin/test-admin.component';
import { HightTestComponent } from './../../statistics-admin/hight-test/hight-test.component';
import { GoodResultComponent } from './../../statistics-admin/good-result/good-result.component';
import { StaFeedbackComponent } from './../../statistics-admin/sta-feedback/sta-feedback.component';
import { MediumSubjectComponent } from './../../statistics-admin/medium-subject/medium-subject.component';
import { RatingComponent } from './../../dashboard/rating/rating.component';
import { ResultSubjectComponent } from './../../subject/result-subject/result-subject.component';
import { CreateAnswerQuestionAdminComponent } from './../../create-question-admin/create-answer-question-admin/create-answer-question-admin.component';
import { SeenAnswerComponent } from './../../create-question-admin/seen-answer/seen-answer.component';
import { ModalUpdateQuestionAdminComponent } from './../../create-question-admin/modal-update-question-admin/modal-update-question-admin.component';
import { ModalCreateQuestionAdminComponent } from './../../create-question-admin/modal-create-question-admin/modal-create-question-admin.component';
import { ModalUpdateCategoryAdminComponent } from './../../create-category-admin/modal-update-category-admin/modal-update-category-admin.component';
import { ModalCreateCategoryAdminComponent } from './../../create-category-admin/modal-create-category-admin/modal-create-category-admin.component';
import { ModalUpdateTestAdminComponent } from './../../create-test-admin/modal-update-test-admin/modal-update-test-admin.component';
import { FeedbackAdminComponent } from './../../feedback-admin/feedback-admin.component';
import { StatisticsAdminComponent } from './../../statistics-admin/statistics-admin.component';
import { CreateQuestionAdminComponent } from './../../create-question-admin/create-question-admin.component';
import { CreateCategoryAdminComponent } from './../../create-category-admin/create-category-admin.component';
import { InfoUserAdminComponent } from './../../info-user-admin/info-user-admin.component';
import { ModalCreateTestAdminComponent } from './../../create-test-admin/modal-create-test-admin/modal-create-test-admin.component';
import { CreateTestAdminComponent } from './../../create-test-admin/create-test-admin.component';
import { CountdownModule } from 'ngx-countdown';
import { ModalDeleteSubjectComponent } from '../../create-subject/modal-delete-subject/modal-delete-subject.component';
import { ModalEditSubjectComponent } from './../../create-subject/modal-edit-subject/modal-edit-subject.component';
import { ModalSeenSubjectComponent } from './../../create-subject/modal-seen-subject/modal-seen-subject.component';
import { SubjectComponent } from '../../subject/subject.component';
import { ModalCreateSubjectComponent } from "./../../create-subject/modal-create-subject/modal-create-subject.component";
import { EvaluateComponent } from "./../../evaluate/evaluate.component";
import { InfoUserComponent } from "./../../info-user/info-user.component";
import { StatisticsComponent } from "./../../statistics/statistics.component";
import { FeedbackComponent } from "./../../feedback/feedback.component";
import { ResultEvaluationComponent } from "./../../result-evaluation/result-evaluation.component";
import { LearningInformationComponent } from "./../../learning-information/learning-information.component";
import { CreateSubjectComponent } from "./../../create-subject/create-subject.component";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../dashboard/dashboard.component";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatRippleModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { NgSelectModule } from '@ng-select/ng-select';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { NgxStarRatingModule } from 'ngx-star-rating';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatTableModule,
    MatCardModule,
    MatDialogModule,
    NgSelectModule,
    MatRadioModule,
    CountdownModule,
    MatSlideToggleModule,
    NgxStarRatingModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    DashboardComponent,
    CreateSubjectComponent,
    LearningInformationComponent,
    ResultEvaluationComponent,
    FeedbackComponent,
    StatisticsComponent,
    EvaluateComponent,
    InfoUserComponent,
    ModalCreateSubjectComponent,
    SubjectComponent,
    ModalDeleteSubjectComponent,
    ModalEditSubjectComponent,
    ModalSeenSubjectComponent,
    CreateTestAdminComponent,
    ModalCreateTestAdminComponent,
    InfoUserAdminComponent,
    CreateCategoryAdminComponent,
    CreateQuestionAdminComponent,
    StatisticsAdminComponent,
    FeedbackAdminComponent,
    ModalUpdateTestAdminComponent,
    ModalCreateCategoryAdminComponent,
    ModalUpdateCategoryAdminComponent,
    ModalCreateQuestionAdminComponent,
    ModalUpdateQuestionAdminComponent,
    SeenAnswerComponent,
    CreateAnswerQuestionAdminComponent,
    ResultSubjectComponent,
    RatingComponent,
    HightTestComponent,
    GoodResultComponent,
    StaFeedbackComponent,
    MediumSubjectComponent,
    TestAdminComponent,
    AnswerTestComponent
  ],
})
export class AdminLayoutModule {}
