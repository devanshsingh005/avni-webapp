import { connect } from "react-redux";
import FormWizard from "dataEntryApp/views/registration/FormWizard";
import { ObservationsHolder } from "avni-models";
import {
  updateObs,
  saveProgramEncounter,
  setValidationResults
} from "dataEntryApp/reducers/programEncounterReducer";
import { withRouter } from "react-router-dom";

const mapFormStateToProps = state => ({
  form: state.dataEntry.programEncounterReducer.programEncounterForm,
  subject: state.dataEntry.subjectProfile.subjectProfile,
  observations: state.dataEntry.programEncounterReducer.programEncounter.observations,
  obsHolder: new ObservationsHolder(
    state.dataEntry.programEncounterReducer.programEncounter.observations
  ),
  title: `New Encounter`,
  saved: state.dataEntry.programEncounterReducer.saved,
  onSaveGoto: "/app/subject?uuid=" + state.dataEntry.subjectProfile.subjectProfile.uuid,
  staticValidationResults: state.dataEntry.programEncounterReducer.enconterDateValidation,
  validationResults: state.dataEntry.programEncounterReducer.validationResults,
  message: `${state.dataEntry.programEncounterReducer.programEncounter.name} Encounter Saved`
});

const mapFormDispatchToProps = {
  updateObs,
  onSave: saveProgramEncounter,
  setValidationResults
};

const ProgramEncounterForm = withRouter(
  connect(
    mapFormStateToProps,
    mapFormDispatchToProps
  )(FormWizard)
);

export default ProgramEncounterForm;
