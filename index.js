module.exports = {
  ra: {
    action: {
      delete: 'Cancella',
      show: 'Mostra',
      list: 'Elenco',
      save: 'Salva',
      create: 'Crea',
      edit: 'Modifica',
      sort: 'Ordina',
      cancel: 'Annulla',
      undo: 'Annulla',
      refresh: 'Aggiorna',
      add: 'Aggiungi',
      remove: 'Remove',
      add_filter: 'Aggiungi un filtro',
      remove_filter: 'Rimuovi questo filtro',
      back: 'Indietro',
      bulk_actions: '%{smart_count} selezionati'
    },
    boolean: {
      true: 'Si',
      false: 'No'
    },
    page: {
      list: 'Lista %{name}',
      edit: '%{name} %{id}',
      show: '%{name} %{id}',
      create: 'Aggiungi %{name}',
      delete: 'Elimina %{name} %{id}',
      dashboard: 'Cruscotto',
      not_found: 'Non trovato'
    },
    input: {
      file: {
        upload_several:
                    'Trascina i files da caricare, oppure clicca per selezionare.',
        upload_single: 'Trascina il file da caricare, oppure clicca per selezionarlo.'
      },
      image: {
        upload_several:
                    'Trascina le immagini da caricare, oppure clicca per selezionarle.',
        upload_single:
                    'Trascina l\'immagine da caricare, oppure clicca per selezionarla.'
      },
      references: {
        all_missing: 'Impossibile trovare i riferimenti associati.',
        many_missing:
                    'Almeno uno dei riferimenti associati non sembra più disponibile.',
        single_missing:
                    'Il riferimento associato non sembra più disponibile.'
      }
    },
    message: {
      yes: 'Si',
      no: 'No',
      are_you_sure: 'Sei sicuro ?',
      about: 'Informazioni',
      not_found:
                'Hai inserito un URL errato, oppure hai cliccato un link errato',
      loading: 'La pagina si sta caricando, solo un momento per favore',
      invalid_form: 'Il modulo non è valido. Si prega di verificare la presenza di errori.',
      delete_title: 'Cancella %{name} #%{id}',
      delete_content: 'Are you sure you want to delete this item?',
      bulk_delete_title:
                'Delete %{name} |||| Delete %{smart_count} %{name} items',
      bulk_delete_content:
                'Sei sicuro di voler cancellare questo %{name}? |||| Sei sicuro di voler eliminare questi %{smart_count}?'
    },
    navigation: {
      no_results: 'Nessun risultato trovato',
      no_more_results:
                'La pagina numero %{page} è fuori dell\'intervallo. Prova la pagina precedente.',
      page_out_of_boundaries: 'Il numero di pagina %{page} è fuori dei limiti',
      page_out_from_end: 'Fine della paginazione',
      page_out_from_begin: 'Il numero di pagina deve essere maggiore di 1',
      page_range_info: '%{offsetBegin}-%{offsetEnd} di %{total}',
      next: 'Successivo',
      prev: 'Precedente'
    },
    auth: {
      username: 'Nome utente',
      password: 'Password',
      sign_in: 'Login',
      sign_in_error: 'Autenticazione fallita, riprovare.',
      logout: 'Disconnessione'
    },
    notification: {
      updated: 'Record aggiornato |||| %{smart_count} records aggiornati',
      created: 'Record creato',
      deleted: 'Record eliminato |||| %{smart_count} records eliminati',
      bad_item: 'Record errato',
      item_doesnt_exist: 'Record inesistente',
      http_error: 'Errore di comunicazione con il server dati',
      canceled: 'Azione annullata'
    },
    validation: {
      required: 'Campo obbligatorio',
      minLength: 'Deve essere lungo %{min} caratteri almeno',
      maxLength: 'Deve essere lungo %{max} caratteri al massimo',
      minValue: 'Deve essere almeno %{min}',
      maxValue: 'Deve essere al massimo %{max}',
      number: 'Deve essere un numero',
      email: 'Deve essere un valido indirizzo email',
      oneOf: 'Deve essere uno di: %{options}',
      regex: 'Deve rispettare il formato (espressione regolare): %{pattern}'
    }
  }
}
