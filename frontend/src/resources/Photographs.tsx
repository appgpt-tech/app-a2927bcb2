//Source code generated by AppGPT (www.appgpt.tech)
import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  UrlInput,
  PasswordInput,
} from 'react-admin';
import { useRecordContext } from 'react-admin';
import { Grid } from '@mui/material';
const ReadOnlyPasswordField = ({ record, source }) => {
  // You can customize the way you display the password here, e.g., mask it with asterisks
  const maskedPassword = '********';

  return <span>{maskedPassword}</span>;
};
const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
    <ExportButton />
    <SelectColumnsButton />
  </TopToolbar>
);
const PhotographsTitle = () => {
  const record = useRecordContext();
  return <span>Photographs {record ? `"${record.imageUrl}"` : ''}</span>;
};

export const PhotographsList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <ImageField source="imageUrl" />
      <TextField source="caption" />
      <TextField source="photographerName" />
      <DateField source="dateTaken" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const PhotographsEdit = () => (
  <Edit title={<PhotographsTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <ImageInput source="imageUrl" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="caption" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="photographerName" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="dateTaken" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const PhotographsCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <ImageInput source="imageUrl" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="caption" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="photographerName" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="dateTaken" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

const ResourceFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  ,
  ,
  ,
  ,
];
