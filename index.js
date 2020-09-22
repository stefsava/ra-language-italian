const italianMessages = {
    ra: {
        action: {
            add_filter: 'Aggiungi un filtro',
            add: 'Aggiungi',
            back: 'Indietro',
            bulk_actions: '%{smart_count} selezionato |||| %{smart_count} selezionati',
            cancel: 'Annulla',
            clear_input_value: 'Pulisci campo',
            clone: 'Duplica',
            confirm: 'Conferma',
            create: 'Crea',
            delete: 'Elimina',
            edit: 'Modifica',
            export: 'Esporta',
            list: 'Elenco',
            refresh: 'Aggiorna',
            remove_filter: 'Rimuovi questo filtro',
            remove: 'Elimina',
            save: 'Salva',
            search: 'Ricerca',
            show: 'Mostra',
            sort: 'Ordina',
            undo: 'Annulla',
            unselect: 'Deselezionare',
            expand: 'Espandi',
            close: 'Chiudi',
            open_menu: 'Aprire il menu',
            close_menu: 'Chiudere il menu',
        },
        boolean: {
            true: 'Si',
            false: 'No',
            null: '',
        },
        page: {
            create: 'Aggiungi %{name}',
            dashboard: 'Dashboard',
            edit: '%{name} %{id}',
            error: 'Qualcosa è andato storto',
            list: 'Lista %{name}',
            loading: 'Caricamento in corso',
            not_found: 'Non trovato',
            show: '%{name} %{id}',
            empty: 'Non ancora in %{name}.',
            invite: 'Desidera crearne uno ?'
        },
        input: {
            file: {
                upload_several: 'Trascina i files da caricare, oppure clicca per selezionare.',
                upload_single: 'Trascina il file da caricare, oppure clicca per selezionarlo.'
            },
            image: {
                upload_several: 'Trascina le immagini da caricare, oppure clicca per selezionarle.',
                upload_single: 'Trascina l\'immagine da caricare, oppure clicca per selezionarla.'
            },
            references: {
                all_missing: 'Impossibile trovare i riferimenti associati.',
                many_missing: 'Almeno uno dei riferimenti associati non sembra più disponibile.',
                single_missing: 'Il riferimento associato non sembra più disponibile.'
            },
            password: {
                toggle_visible: 'Nascondere la password',
                toggle_hidden: 'Mostrare la password',
            },
        },
        message: {
            about: 'Informazioni',
            are_you_sure: 'Sei sicuro?',
            bulk_delete_content: 'Sei sicuro di voler cancellare questo %{name}? |||| Sei sicuro di voler eliminare questi %{smart_count}?',
            bulk_delete_title: 'Elimina %{name} |||| Elimina %{smart_count} %{name} elementi',
            delete_content: 'Sei sicuro di voler eliminare questi elementi?',
            delete_title: 'Cancella %{name} #%{id}',
            details: 'Dettagli',
            error: 'Si è verificato une errore e la tua richiesta non è stata completata.',
            invalid_form: 'Il modulo non è valido. Si prega di verificare la presenza di errori.',
            loading: 'La pagina si sta caricando, solo un momento per favore',
            no: 'No',
            not_found: 'Hai inserito un URL errato, oppure hai cliccato un link errato',
            yes: 'Si',
            unsaved_changes: "Alcune modifiche non sono state registrate. È sicuro/a di voler abbandonare questa pagina ?"
        },
        navigation: {
            no_results: 'Nessun risultato trovato',
            no_more_results: 'La pagina numero %{page} è fuori dell\'intervallo. Prova la pagina precedente.',
            page_out_of_boundaries: 'Il numero di pagina %{page} è fuori dei limiti',
            page_out_from_end: 'Fine della paginazione',
            page_out_from_begin: 'Il numero di pagina deve essere maggiore di 1',
            page_range_info: '%{offsetBegin}-%{offsetEnd} di %{total}',
            page_rows_per_page: 'Righe per pagina',
            next: 'Successivo',
            prev: 'Precedente'
        },
        sort: {
            sort_by: 'Ordine per %{field} %{order}',
            ASC: 'crescente',
            DESC: 'decrescente',
        },
        auth: {
            auth_check_error: 'Grazie di connettersi per continuare',
            user_menu: 'Profilo',
            username: 'Nome utente',
            password: 'Password',
            sign_in: 'Login',
            sign_in_error: 'Autenticazione fallita, riprovare.',
            logout: 'Esci',
        },
        notification: {
            updated: 'Record aggiornato |||| %{smart_count} records aggiornati',
            created: 'Record creato',
            deleted: 'Record eliminato |||| %{smart_count} records eliminati',
            bad_item: 'Record errato',
            item_doesnt_exist: 'Record inesistente',
            http_error: 'Errore di comunicazione con il server dati',
            data_provider_error: 'Errore del data provider. Controlla la console per i dettagli.',
            i18n_error: 'Errore di caricamento delle traduzioni per la lingua selezionata',
            canceled: 'Azione annullata',
            logged_out: 'La sessione è scaduta. Effettua nuovamente l\'accesso.'
        },
        validation: {
            required: 'Campo obbligatorio',
            minLength: 'Deve essere lungo almeno %{min} caratteri',
            maxLength: 'Deve essere lungo al massimo %{max} caratteri',
            minValue: 'Deve essere almeno %{min}',
            maxValue: 'Deve essere al massimo %{max}',
            number: 'Deve essere un numero',
            email: 'Deve essere un valido indirizzo email',
            oneOf: 'Deve essere uno di: %{options}',
            regex: 'Deve rispettare il formato (espressione regolare): %{pattern}'
        },
    },
};

export default italianMessages;