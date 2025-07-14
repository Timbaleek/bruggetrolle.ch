<script lang="ts">
    import { enhance } from "$app/forms";

    let firstname: string = "";
    let lastname: string = "";
    let email: string = "";

    let emailInput: HTMLInputElement;

    $: email = email.trim();
    $: {
        if (emailInput) {
            if (email.length > 0 && !email.match(/\S+@\S+\.\S+/g)) {
                emailInput.classList.add("is-danger");
            } else {
                emailInput.classList.remove("is-danger");
            }
        }
    }
    $: firstname = firstname.trim();
    $: lastname = lastname.trim();
</script>

<form class="form" method="POST" use:enhance>
    <div class="field is-horizontal">
        <div class="field-body">
            <div class="field">
                <label class="label" for="firstname">Vorname</label>
                <div class="control">
                    <input
                        class="input"
                        type="text"
                        id="firstname"
                        name="firstname"
                        bind:value={firstname}
                        required
                    />
                </div>
            </div>
            <div class="field">
                <label class="label" for="lastname">Nachname</label>
                <div class="control">
                    <input
                        class="input"
                        type="text"
                        id="lastname"
                        name="lastname"
                        bind:value={lastname}
                        required
                    />
                </div>
            </div>
        </div>
    </div>
    <div class="field">
        <label class="label" for="email">E-Mail</label>
        <div class="control has-icons-left">
            <input
                class="input"
                type="email"
                id="email"
                name="email"
                placeholder="E-Mail"
                bind:value={email}
                bind:this={emailInput}
                required
            />
            <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
            </span>
        </div>
    </div>
    <div class="field">
        <div class="control">
            <button class="button is-primary" type="submit"> Absenden </button>
        </div>
    </div>
</form>
